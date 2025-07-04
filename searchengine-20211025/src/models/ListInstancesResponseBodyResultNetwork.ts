// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyResultNetwork extends $dara.Model {
  allow?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * ""
   */
  endpoint?: string;
  publicEndpoint?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp11ldcf59q2nbwkqgj6z
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the instance is deployed.
   * 
   * @example
   * vpc-wz9axk41d9vffoc79x0oe
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      endpoint: 'endpoint',
      publicEndpoint: 'publicEndpoint',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      endpoint: 'string',
      publicEndpoint: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

