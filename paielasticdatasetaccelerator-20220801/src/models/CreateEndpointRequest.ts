// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * inst-ivrq92qhbyrg4jctih
   */
  instanceId?: string;
  /**
   * @example
   * endpoint-1
   */
  name?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * vpc-j6co2fcdsl1q0gnuc3ym3
   */
  vpcId?: string;
  /**
   * @example
   * vsw-j6cmr00qjyrft6jo2mg7g
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

