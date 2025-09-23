// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticBandWidthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  elasticBandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidth: 'ElasticBandwidth',
      instanceId: 'InstanceId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBandwidth: 'number',
      instanceId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

