// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskInfoHistoryRequest extends $dara.Model {
  beginCreateTime?: number;
  createTimeCursor?: number;
  endCreateTime?: number;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  taskNoCursor?: string;
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

