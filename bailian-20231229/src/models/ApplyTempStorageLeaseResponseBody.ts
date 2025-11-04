// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyTempStorageLeaseResponseBodyDataParam extends $dara.Model {
  /**
   * @example
   * Content-Type: application/json
   */
  headers?: any;
  /**
   * @example
   * PUT
   */
  method?: string;
  /**
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
  param?: ApplyTempStorageLeaseResponseBodyDataParam;
  /**
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
   * @example
   * DataCenter.FileTooLarge
   */
  code?: string;
  data?: ApplyTempStorageLeaseResponseBodyData;
  /**
   * @example
   * User not authorized to operate on the specified resource
   */
  message?: string;
  /**
   * @example
   * 778C0B3B-xxxx-5FC1-A947-36EDD13606AB
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
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

