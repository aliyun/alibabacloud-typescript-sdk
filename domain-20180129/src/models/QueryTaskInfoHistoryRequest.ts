// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskInfoHistoryRequest extends $dara.Model {
  /**
   * @example
   * 1522080000000
   */
  beginCreateTime?: number;
  /**
   * @example
   * 1522080000000
   */
  createTimeCursor?: number;
  /**
   * @example
   * 1522080000000
   */
  endCreateTime?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * aa634d3f-927e-4d17-9d2c-test
   */
  taskNoCursor?: string;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      beginCreateTime: 'BeginCreateTime',
      createTimeCursor: 'CreateTimeCursor',
      endCreateTime: 'EndCreateTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      taskNoCursor: 'TaskNoCursor',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCreateTime: 'number',
      createTimeCursor: 'number',
      endCreateTime: 'number',
      lang: 'string',
      pageSize: 'number',
      taskNoCursor: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

