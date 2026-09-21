// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetSelectionConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business type of the asset selection. Valid values:
   * 
   * - **VIRUS_SCAN_CYCLE_CONFIG**: trojan scan configuration.
   * - **VIRUS_SCAN_ONCE_TASK**: trojan scan one-time scan.
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The operating system of the target asset. Valid values:
   * - **windows**: Windows operating system.
   * - **linux**: Linux operating system.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The unique identifier of the asset selection. You can use this identifier to query or modify the assets that correspond to this asset selection.
   * 
   * @example
   * 53e93435-d694-4c03-9ce7-da12bee1****
   */
  selectionKey?: number;
  /**
   * @remarks
   * The Asset Type of the target. Valid values:
   * 
   * - **instance**: selected by server.
   * - **group**: selected by group.
   * - **vpc**: selected by VPC.
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
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
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

