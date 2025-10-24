// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceM3u8JobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1627357322
   */
  gmtCreate?: number;
  /**
   * @example
   * 1627357327
   */
  gmtModified?: number;
  /**
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  jobId?: string;
  /**
   * @example
   * 437bd2b516ffda105d07b12a9a82****
   */
  mediaId?: string;
  /**
   * @example
   * {"Bucket":"ivison-test","Location":"oss-cn-shanghai","Object":"out.mp4"}
   */
  output?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 平头哥半导体(上海)
   */
  trace?: string;
  /**
   * @example
   * 123
   */
  userData?: string;
  /**
   * @example
   * 13466****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      mediaId: 'MediaId',
      output: 'Output',
      status: 'Status',
      trace: 'Trace',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      jobId: 'string',
      mediaId: 'string',
      output: 'string',
      status: 'string',
      trace: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceM3u8JobResponseBody extends $dara.Model {
  data?: QueryTraceM3u8JobResponseBodyData[];
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
   * 5CA6E020-4102-4FFF-AA56-5ED7ECD8****
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
      data: { 'type': 'array', 'itemType': QueryTraceM3u8JobResponseBodyData },
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
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

