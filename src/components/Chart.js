import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) =>  _.round(_.sum(data)/data.length);

const Chart = props => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div><strong>Average: </strong>{average(props.data) + props.type}</div>
        </div>
    )
}

export default Chart;