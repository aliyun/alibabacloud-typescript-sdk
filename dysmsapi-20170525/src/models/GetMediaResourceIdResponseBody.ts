// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResourceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource.
   * 
   * @example
   * http://test-example.com/download.jpg
   */
  resUrlDownload?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * SMS_14571****
   */
  resourceId?: number;
  static names(): { [key: string]: string } {
    return {
      resUrlDownload: 'ResUrlDownload',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resUrlDownload: 'string',
      resourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResourceIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetMediaResourceIdResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F07CF237-F6E3-5F77-B91B-F9B7C5DE84AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMediaResourceIdResponseBodyData,
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

