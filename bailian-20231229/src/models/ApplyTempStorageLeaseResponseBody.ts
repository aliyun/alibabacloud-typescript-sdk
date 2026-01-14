// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTempStorageLeaseResponseBodyDataParam extends $dara.Model {
  /**
   * @remarks
   * K-V fields to be included in the Header; both Key and Value are strings.
   * 
   * @example
   * Content-Type: application/json
   */
  headers?: any;
  /**
   * @remarks
   * HTTP method for the call. Valid values: PUT POST
   * 
   * @example
   * PUT
   */
  method?: string;
  /**
   * @remarks
   * Authorized URL for the file upload.
   * 
   * @example
   * https://bailian-datahub-data-origin-prod.oss-cn-hangzhou.aliyuncs.com/1005426495169178/10024405/68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847.pdf?Expires=1716699536&OSSAccessKeyId=TestID&Signature=HfwPUZo4pR6DatSDym0zFKVh9Wg%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: 'any',
      method: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTempStorageLeaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * HTTP parameters used for uploading the file.
   */
  param?: ApplyTempStorageLeaseResponseBodyDataParam;
  /**
   * @remarks
   * Unique lease ID. This parameter is required when retrieving the uploaded file within the application later.
   * 
   * @example
   * 1e6a159107384782be5e45ac4759b247.1719325231035
   */
  tempStorageLeaseId?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      tempStorageLeaseId: 'TempStorageLeaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: ApplyTempStorageLeaseResponseBodyDataParam,
      tempStorageLeaseId: 'string',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTempStorageLeaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The returned data fields.
   */
  data?: ApplyTempStorageLeaseResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyTempStorageLeaseResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

