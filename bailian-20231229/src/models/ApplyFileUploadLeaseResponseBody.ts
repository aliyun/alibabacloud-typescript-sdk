// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyFileUploadLeaseResponseBodyDataParam extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs to include in the request header. Both keys and values are strings.
   * 
   * > The returned Content-Type may be empty. Use the empty value as-is when uploading.
   * 
   * @example
   * "X-bailian-extra":"MTAwNTQyNjQ5NTE2OTE3OA==",
   * "Content-Type":"application/pdf"
   */
  headers?: any;
  /**
   * @remarks
   * The HTTP method. Valid values:
   * - PUT
   * - POST
   * 
   * @example
   * PUT
   */
  method?: string;
  /**
   * @remarks
   * The upload URL for the file.
   * 
   * > This URL is a pre-signed URL. It does not support FormData uploads. Use binary upload instead.
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

export class ApplyFileUploadLeaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the lease. This parameter is required when calling the **AddFile** operation.
   * 
   * @example
   * 1e6a159107384782be5e45ac4759b247.1719325231035
   */
  fileUploadLeaseId?: string;
  /**
   * @remarks
   * The HTTP request parameters for uploading the file.
   */
  param?: ApplyFileUploadLeaseResponseBodyDataParam;
  /**
   * @remarks
   * The upload method for the file. Valid values:
   * - OSS.PreSignedURL
   * - HTTP
   * 
   * @example
   * HTTP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileUploadLeaseId: 'FileUploadLeaseId',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUploadLeaseId: 'string',
      param: ApplyFileUploadLeaseResponseBodyDataParam,
      type: 'string',
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

export class ApplyFileUploadLeaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   * 
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  /**
   * @remarks
   * The business data field of the operation.
   */
  data?: ApplyFileUploadLeaseResponseBodyData;
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
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyFileUploadLeaseResponseBodyData,
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

