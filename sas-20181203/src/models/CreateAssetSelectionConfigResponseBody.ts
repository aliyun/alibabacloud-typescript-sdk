// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetSelectionConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business type that is selected for the asset. Valid values:
   * 
   * *   **VIRUS_SCAN_CYCLE_CONFIG**: virus detection configuration
   * *   **VIRUS_SCAN_ONCE_TASK**: one-time scan for virus detection
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The operating system of the asset. Valid values:
   * 
   * *   **windows**: the Windows operating system
   * *   **linux**: the Linux operating system
   * 
   * @example
   * all
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the current asset selection. It can be used to query and modify the asset that is selected.
   * 
   * @example
   * 53e93435-d694-4c03-9ce7-da12bee1****
   */
  selectionKey?: number;
  /**
   * @remarks
   * The dimension based on which the asset is selected. Valid values:
   * 
   * *   **instance**: The asset is selected by server.
   * *   **group**: The asset is selected by group.
   * *   **vpc**: The asset is selected by VPC.
   * 
   * @example
   * group
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      platform: 'Platform',
      selectionKey: 'SelectionKey',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      platform: 'string',
      selectionKey: 'number',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetSelectionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAssetSelectionConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C619F37
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAssetSelectionConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

