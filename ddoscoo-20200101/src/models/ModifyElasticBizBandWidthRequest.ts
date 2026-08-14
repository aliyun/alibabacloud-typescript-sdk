// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticBizBandWidthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  elasticBizBandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBizBandwidth: 'ElasticBizBandwidth',
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBizBandwidth: 'number',
      instanceId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

