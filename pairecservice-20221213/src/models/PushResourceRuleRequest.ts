// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourceRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricInfo: 'MetricInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metricInfo) {
      $dara.Model.validateMap(this.metricInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

