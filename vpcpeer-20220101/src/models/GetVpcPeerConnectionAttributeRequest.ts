// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPeerConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pcc-lnk0m24khwvtkm****
   */
  instanceId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

