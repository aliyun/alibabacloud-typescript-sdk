// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceVodUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The decryption key.
   * A decryption key is generated when the **ShouldEncrypt** parameter is set to **true**.
   * 
   * @example
   * {"iv": "MDEy****OTo7PD0+Pw==","key": "eA2r****fHjOmnyBfQ=="}
   */
  decryptKey?: string;
  stunInfo?: string;
  /**
   * @remarks
   * The URL of the local recording.
   */
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      decryptKey: 'DecryptKey',
      stunInfo: 'StunInfo',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decryptKey: 'string',
      stunInfo: 'string',
      vodUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * - **200**: The call was successful.
   * - Other values: The call failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: QueryDeviceVodUrlResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * product is not active.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06DC77A0-4622-42DB-9EE0-25FIOHS82JK1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDeviceVodUrlResponseBodyData,
      errorMessage: 'string',
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

