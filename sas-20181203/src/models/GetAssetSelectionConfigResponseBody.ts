// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetSelectionConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The operating system of the asset. Valid values:
   * 
   * *   **windows**
   * *   **linux**
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the current asset selection. It can be used to query and modify the asset that is selected.
   * 
   * @example
   * 657c8411-4e89-446c-ab66-d45d1331****
   */
  selectionKey?: string;
  /**
   * @remarks
   * The dimension based on which the asset is selected. Valid values:
   * 
   * *   **instance**: The asset is selected by server.
   * *   **group**: The asset is selected by group.
   * *   **vpc**: The asset is selected by VPC.
   * 
   * @example
   * instance
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      selectionKey: 'SelectionKey',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      selectionKey: 'string',
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

export class GetAssetSelectionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetAssetSelectionConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5936B67-3EDF-53ED-A542-02543972449A
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
      data: GetAssetSelectionConfigResponseBodyData,
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

