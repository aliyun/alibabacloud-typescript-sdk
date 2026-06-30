// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRuleResponseBodyData extends $dara.Model {
  ridInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      ridInfo: 'RidInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ridInfo)) {
      $dara.Model.validateArray(this.ridInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** means success. Any other value indicates failure. Use this field to diagnose errors.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: UploadRuleResponseBodyData;
  /**
   * @remarks
   * Error details if the call fails. **successful** if successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded. Use this field to verify success:
   * 
   * - **true** means success.
   * 
   * - false or **null** means failure.
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
      data: UploadRuleResponseBodyData,
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

