// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirusScanOnceTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asset selection business type. Valid values:
   * 
   * - **VIRUS_SCAN_CYCLE_CONFIG**: virus scan configuration
   * - **VIRUS_SCAN_ONCE_TASK**: virus scan one-time task
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The operating system of the target asset. Valid values:
   * 
   * - **windows**: Windows operating system
   * - **linux**: Linux operating system
   * 
   * @example
   * windows
   */
  platform?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D345A09-5ABD-593C-9C26-5C2B28632CD6
   */
  requestId?: string;
  /**
   * @remarks
   * The unique identifier of this asset selection, which can be used to query or modify the assets corresponding to this selection.
   * 
   * @example
   * 87af4d19-38fc-408d-9549-2bf7b6c2a4b9
   */
  selectionKey?: number;
  /**
   * @remarks
   * The target asset type. Valid values:
   * 
   * - **all_instance**: all servers
   * - **instance**: select by server
   * - **group**: select by group
   * - **vpc**: select by VPC
   * 
   * @example
   * all_instance
   */
  targetType?: string;
  /**
   * @remarks
   * The server ID.
   * 
   * @example
   * 9ef1a02e1de695cb7f9fea2c6c145853eklEsP2JP0Z
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      platform: 'Platform',
      requestId: 'RequestId',
      selectionKey: 'SelectionKey',
      targetType: 'TargetType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      platform: 'string',
      requestId: 'string',
      selectionKey: 'number',
      targetType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirusScanOnceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails. For more information, refer to error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateVirusScanOnceTaskResponseBodyData;
  /**
   * @remarks
   * The message information.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739705BB-B0EF-554B-B3A8-383F4F93E067
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * - **true**: The call is successful.                               
   * - **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateVirusScanOnceTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

