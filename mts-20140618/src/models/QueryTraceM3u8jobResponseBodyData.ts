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

