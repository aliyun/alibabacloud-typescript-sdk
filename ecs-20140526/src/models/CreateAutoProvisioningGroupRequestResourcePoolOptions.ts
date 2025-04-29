// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupRequestResourcePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of private pools. The ID of a private pool is the same as the ID of the elasticity assurance or capacity reservation that is associated with the private pool. You can specify the IDs of only targeted private pools for this parameter.
   */
  privatePoolIds?: string[];
  /**
   * @remarks
   * Specifies which resource pools to use to create instances. Resource pools include the public pool and the private pools that are associated with elasticity assurance and capacity reservations in the Active state. Valid values:
   * 
   * *   PrivatePoolFirst: uses private pools first. If you set this parameter to PrivatePoolFirst, you can specify ResourcePoolOptions.PrivatePoolIds or leave ResourcePoolOptions.PrivatePoolIds empty. If you specify ResourcePoolOptions.PrivatePoolIds, the specified private pools are used first. If you leave ResourcePoolOptions.PrivatePoolIds empty or the private pools that you specify in ResourcePoolOptions.PrivatePoolIds have insufficient capacity, matching open private pools are used. If no matching open private pools exist, the public pool is used.
   * *   PrivatePoolOnly: uses only private pools. If you set this parameter to PrivatePoolOnly, you must specify ResourcePoolOptions.PrivatePoolIds. If the private pools that you specify in ResourcePoolOptions.PrivatePoolIds have insufficient capacity, instances cannot be created.
   * *   PublicPoolOnly: uses the public pool.
   * 
   * Default value: PublicPoolOnly.
   * 
   * @example
   * PrivatePoolFirst
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolIds: 'PrivatePoolIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolIds: { 'type': 'array', 'itemType': 'string' },
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privatePoolIds)) {
      $dara.Model.validateArray(this.privatePoolIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

