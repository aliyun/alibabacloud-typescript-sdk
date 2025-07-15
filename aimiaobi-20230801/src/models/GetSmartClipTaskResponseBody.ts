// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartClipTaskResponseBodyDataSubJobsFileAttr extends $dara.Model {
  /**
   * @example
   * 120
   */
  duration?: number;
  /**
   * @example
   * 290804
   */
  fileLength?: string;
  /**
   * @example
   * 2024-12-12.mp4
   */
  fileName?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * http://www.example.com/tmp.mp4
   */
  tmpUrl?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileLength: 'FileLength',
      fileName: 'FileName',
      height: 'Height',
      tmpUrl: 'TmpUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileLength: 'string',
      fileName: 'string',
      height: 'number',
      tmpUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyDataSubJobs extends $dara.Model {
  /**
   * @example
   * x\"x\"x\"x
   */
  errorMessage?: string;
  fileAttr?: GetSmartClipTaskResponseBodyDataSubJobsFileAttr;
  /**
   * @example
   * oss://default/bucket-name/path-xxx/xxx-1.mp4
   */
  fileKey?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * xxxxx
   */
  subJobId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      status: 'Status',
      subJobId: 'SubJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      fileAttr: GetSmartClipTaskResponseBodyDataSubJobsFileAttr,
      fileKey: 'string',
      status: 'string',
      subJobId: 'string',
    };
  }

  validate() {
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyData extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  subJobs?: GetSmartClipTaskResponseBodyDataSubJobs[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      subJobs: 'SubJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      subJobs: { 'type': 'array', 'itemType': GetSmartClipTaskResponseBodyDataSubJobs },
    };
  }

  validate() {
    if(Array.isArray(this.subJobs)) {
      $dara.Model.validateArray(this.subJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetSmartClipTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmartClipTaskResponseBodyData,
      httpStatusCode: 'number',
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

