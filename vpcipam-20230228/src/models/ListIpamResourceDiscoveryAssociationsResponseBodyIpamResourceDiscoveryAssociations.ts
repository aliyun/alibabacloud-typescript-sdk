// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceDiscoveryAssociationsResponseBodyIpamResourceDiscoveryAssociations extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPAM.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @remarks
   * The ID of resource discovery instance.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource discovery belongs.
   * 
   * @example
   * 1210123456******
   */
  ipamResourceDiscoveryOwnerId?: string;
  /**
   * @remarks
   * The status of the resource discovery instance. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  ipamResourceDiscoveryStatus?: string;
  /**
   * @remarks
   * The type of resource discovery. Valid values:
   * 
   * *   **system**: default resource discovery created by the system.
   * *   **custom**: custom resource discovery created by users.
   * 
   * @example
   * custom
   */
  ipamResourceDiscoveryType?: string;
  /**
   * @remarks
   * The status of the associations. Valid values:
   * 
   * *   **Created**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ipamId: 'IpamId',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      ipamResourceDiscoveryOwnerId: 'IpamResourceDiscoveryOwnerId',
      ipamResourceDiscoveryStatus: 'IpamResourceDiscoveryStatus',
      ipamResourceDiscoveryType: 'IpamResourceDiscoveryType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamId: 'string',
      ipamResourceDiscoveryId: 'string',
      ipamResourceDiscoveryOwnerId: 'string',
      ipamResourceDiscoveryStatus: 'string',
      ipamResourceDiscoveryType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

