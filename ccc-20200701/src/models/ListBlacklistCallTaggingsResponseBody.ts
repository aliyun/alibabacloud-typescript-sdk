// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlacklistCallTaggingsResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  blacklisted?: boolean;
  /**
   * @example
   * job-481841171213393920
   */
  jobId?: string;
  /**
   * @example
   * 1521083xxxx
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      blacklisted: 'Blacklisted',
      jobId: 'JobId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blacklisted: 'boolean',
      jobId: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBlacklistCallTaggingsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListBlacklistCallTaggingsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 032C73C4-3A6F-4502-872B-4F5B41161C6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListBlacklistCallTaggingsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

