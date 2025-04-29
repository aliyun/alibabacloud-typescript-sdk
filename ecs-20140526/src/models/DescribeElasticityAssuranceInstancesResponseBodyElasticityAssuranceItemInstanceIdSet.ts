// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssuranceInstancesResponseBodyElasticityAssuranceItemInstanceIdSet extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * i-bp67acfmxazb4****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

