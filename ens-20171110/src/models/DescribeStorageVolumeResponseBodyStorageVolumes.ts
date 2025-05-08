// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageVolumeResponseBodyStorageVolumes extends $dara.Model {
  /**
   * @remarks
   * The authentication protocol. The value is set to **CHAP**.
   * 
   * @example
   * CHAP
   */
  authProtocol?: string;
  /**
   * @remarks
   * The time when the volume was created. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-14T09:35:32Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the volume.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-shenzhen-3
   */
  ensRegionId?: string;
  /**
   * @remarks
   * Indicates whether authentication is enabled. Valid values:
   * 
   * *   **1**: Authentication is enabled.
   * *   **0** (default): Authentication is disabled.
   * 
   * @example
   * 0
   */
  isAuth?: number;
  /**
   * @remarks
   * Indicates whether the volume is enabled. Valid values:
   * 
   * *   **1** (default): The volume is enabled.
   * *   **0**: The volume is disabled.
   * 
   * @example
   * 1
   */
  isEnable?: number;
  /**
   * @remarks
   * The status of the volume. Valid values:
   * 
   * *   creating
   * *   available
   * *   deleting
   * *   deleted
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the storage gateway.
   * 
   * @example
   * sgw-***
   */
  storageGatewayId?: string;
  /**
   * @remarks
   * The ID of the storage medium.
   * 
   * @example
   * d-***
   */
  storageId?: string;
  /**
   * @remarks
   * The ID of the volume.
   * 
   * @example
   * sv-***
   */
  storageVolumeId?: string;
  /**
   * @remarks
   * The name of the volume.
   * 
   * @example
   * testVolumeName
   */
  storageVolumeName?: string;
  /**
   * @remarks
   * The destination of the volume.
   * 
   * @example
   * iqn.*.*.*:*
   */
  targetName?: string;
  static names(): { [key: string]: string } {
    return {
      authProtocol: 'AuthProtocol',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      isAuth: 'IsAuth',
      isEnable: 'IsEnable',
      status: 'Status',
      storageGatewayId: 'StorageGatewayId',
      storageId: 'StorageId',
      storageVolumeId: 'StorageVolumeId',
      storageVolumeName: 'StorageVolumeName',
      targetName: 'TargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authProtocol: 'string',
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      isAuth: 'number',
      isEnable: 'number',
      status: 'string',
      storageGatewayId: 'string',
      storageId: 'string',
      storageVolumeId: 'string',
      storageVolumeName: 'string',
      targetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

