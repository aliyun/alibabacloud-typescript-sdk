// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceElasticVCUUpperLimitRequest extends $dara.Model {
  /**
   * @remarks
   * The upper limit for the VCUs of the instance.
   * 
   * >  Valid values of the upper limit for the VCUs of an instance: **Number of reserved VCUs+0.1 to 2000**. You can upgrade or downgrade configurations to modify the number of reserved VCUs by increments or decrements of 1. You can dynamically modify the upper limit for the VCUs of an instance by increments or decrements of 0.1
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  elasticVCUUpperLimit?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * workshop-bj-ots1
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticVCUUpperLimit: 'ElasticVCUUpperLimit',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticVCUUpperLimit: 'number',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

