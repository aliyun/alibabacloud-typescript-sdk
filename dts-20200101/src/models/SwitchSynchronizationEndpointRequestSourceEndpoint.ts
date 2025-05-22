// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSynchronizationEndpointRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source instance belongs. You must specify this parameter only if the source instance and the destination instance belong to different Alibaba Cloud accounts.
   * 
   * @example
   * 14069264****
   */
  ownerID?: string;
  /**
   * @remarks
   * The authorized Resource Access Management (RAM) role of the source instance. You must specify the RAM role only if the source instance and the destination instance belong to different Alibaba Cloud accounts. You can use the RAM role to allow the Alibaba Cloud account that owns the destination instance to access the source instance.
   * 
   * >  For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      ownerID: 'OwnerID',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerID: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

