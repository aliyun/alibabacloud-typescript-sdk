// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageVolumeRequest extends $dara.Model {
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
   * The ID of the gateway.
   * 
   * @example
   * sgw-****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the volume. Valid values:
   * 
   * *   **1** (default): enables the volume.
   * *   **0**: disables the volume.
   * 
   * @example
   * 1
   */
  isEnable?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  volumeId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      gatewayId: 'GatewayId',
      isEnable: 'IsEnable',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storageId: 'StorageId',
      volumeId: 'VolumeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      gatewayId: 'string',
      isEnable: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      storageId: 'string',
      volumeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

