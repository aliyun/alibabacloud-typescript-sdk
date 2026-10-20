// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequestOrderDetails extends $dara.Model {
  /**
   * @remarks
   * The billable methods of NAS. Valid values:  
   * - PrePaid: subscription (currently not supported).  
   * - PostPaid: pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The file system name.
   * The name must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * nasFile
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The mount target name. The name must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * nasMount
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-xxx
   */
  networkId?: string;
  /**
   * @remarks
   * The order type. Valid values: BUY.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The storage protocol. Valid values: nfs.
   * 
   * This parameter is required.
   * 
   * @example
   * nfs
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - capacity: storage-optimized.
   * 
   * - Performance: ultra-fast.
   * 
   * This parameter is required.
   * 
   * @example
   * capacity
   */
  storgeType?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      ensRegionId: 'EnsRegionId',
      fileSystemName: 'FileSystemName',
      mountTargetDomain: 'MountTargetDomain',
      networkId: 'NetworkId',
      orderType: 'OrderType',
      protocolType: 'ProtocolType',
      storgeType: 'StorgeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      ensRegionId: 'string',
      fileSystemName: 'string',
      mountTargetDomain: 'string',
      networkId: 'string',
      orderType: 'string',
      protocolType: 'string',
      storgeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The list of orders. Each element in the list contains the details of an order.
   * 
   * This parameter is required.
   */
  orderDetails?: CreateFileSystemRequestOrderDetails[];
  static names(): { [key: string]: string } {
    return {
      orderDetails: 'OrderDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDetails: { 'type': 'array', 'itemType': CreateFileSystemRequestOrderDetails },
    };
  }

  validate() {
    if(Array.isArray(this.orderDetails)) {
      $dara.Model.validateArray(this.orderDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

