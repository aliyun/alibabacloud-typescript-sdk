// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncJobResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @example
   * paramsIllegal
   */
  errorMessage?: string;
  /**
   * @example
   * 7435839A-5B92-4AA1-B2DE-5B6C98C04DDE
   */
  jobId?: string;
  /**
   * @example
   * http://viapi-cn-shanghai-dha-filter.oss-cn-shanghai.aliyuncs.com/upload/recoloring-hd-2020-06-22-19-39-25-798c9cb57f-v6pj4/2020-6-23/invi_filter_015928997797691000043_tIPX7W.jpg?Expires=1592901579&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=qelgcQJBnzRogPybEPDDrDIjHd****
   */
  result?: string;
  /**
   * @example
   * PROCESS_SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncJobResultResponseBody extends $dara.Model {
  data?: GetAsyncJobResultResponseBodyData;
  /**
   * @example
   * 6B4B827E-1CAA-43CD-BBDF-BB572E035976
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
      data: GetAsyncJobResultResponseBodyData,
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

