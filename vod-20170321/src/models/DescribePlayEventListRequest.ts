// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayEventListRequest extends $dara.Model {
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  playTs?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playTs: 'PlayTs',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNo: 'number',
      pageSize: 'number',
      playTs: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

