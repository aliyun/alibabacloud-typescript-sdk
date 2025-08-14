// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * bfb786c63****4d80648792021eff90
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightExtractJobResponseBody extends $dara.Model {
  data?: SubmitCopyrightExtractJobResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitCopyrightExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
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

