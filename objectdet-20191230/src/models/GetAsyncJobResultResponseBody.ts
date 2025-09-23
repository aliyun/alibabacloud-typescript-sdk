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
   * 35B11E1B-800C-4598-B5AA-577E3BDBD917
   */
  jobId?: string;
  /**
   * @example
   * {\\"inputFile\\":\\"oss://public-vigen-video/guotian.xgt/test_images/test_video\\",\\"width\\":1280,\\"height\\":720,\\"frames\\":[{\\"time\\":6124533574,\\"elements\\":[{\\"type\\":\\"PERSON\\",\\"score\\":0.7812,\\"x\\":289,\\"y\\":271,\\"width\\":100,\\"height\\":156},{\\"type\\":\\"PERSON\\",\\"score\\":0.4377,\\"x\\":917,\\"y\\":267,\\"width\\":34,\\"height\\":51}]}]}]}"}
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
   * 87FC80D2-2571-4BBD-BD61-AFF7912C556D
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

