// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SparkOperatorInfo extends $dara.Model {
  metricValue?: number;
  operatorName?: Buffer;
  static names(): { [key: string]: string } {
    return {
      metricValue: 'MetricValue',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricValue: 'number',
      operatorName: 'Buffer',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

