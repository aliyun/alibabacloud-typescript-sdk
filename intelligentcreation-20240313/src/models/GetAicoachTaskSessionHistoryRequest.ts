// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionHistoryRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 111
   */
  sessionId?: string;
  /**
   * @example
   * 1251317954812712
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sessionId: 'sessionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sessionId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

