// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirusScanOnceTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @example
   * windows
   */
  platform?: string;
  /**
   * @example
   * 1D345A09-5ABD-593C-9C26-5C2B28632CD6
   */
  requestId?: string;
  /**
   * @example
   * 87af4d19-38fc-408d-9549-2bf7b6c2a4b9
   */
  selectionKey?: number;
  /**
   * @example
   * all_instance
   */
  targetType?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: CreateVirusScanOnceTaskResponseBodyData;
  /**
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @example
   * 739705BB-B0EF-554B-B3A8-383F4F93E067
   */
  requestId?: string;
  /**
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

