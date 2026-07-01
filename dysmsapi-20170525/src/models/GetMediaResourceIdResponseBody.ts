// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResourceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 资源下载地址。
   * 
   * @example
   * http://test-example.com/download.jpg
   */
  resUrlDownload?: string;
  /**
   * @remarks
   * 资源ID。
   * 
   * @example
   * 0
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
   * 请求状态码。
   * 
   * - 返回OK代表请求成功。
   * - 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据。
   */
  data?: GetMediaResourceIdResponseBodyData;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * F07CF237-F6E3-5F77-B91B-F9B7C5DE84AB
   */
  requestId?: string;
  /**
   * @remarks
   * 调用接口是否成功。取值：
   * 
   * - **true**：调用成功。
   * 
   * - **false**：调用失败。
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

