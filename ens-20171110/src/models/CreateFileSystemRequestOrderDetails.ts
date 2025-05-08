// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequestOrderDetails extends $dara.Model {
  /**
   * @remarks
   * The billing method of the NAS file system. Valid values:
   * 
   * *   PrePaid: subscription. This billing method is not supported.
   * *   PostPaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-suzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the file system. The name must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * nasFile
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The name of the mount target. The name must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
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
   * The type of the order. Set the value to BUY.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The storage protocol. Set the value to nfs.
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
   * *   Capacity.
   * *   Performance.
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

