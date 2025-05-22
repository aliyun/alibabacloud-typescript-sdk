// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionNoteRequest extends $dara.Model {
  /**
   * @example
   * 1640456765459
   */
  beginTime?: number;
  bizType?: string;
  /**
   * @example
   * 1631635199999
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * I20210420142416000001
   */
  intentionBizId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      bizType: 'BizType',
      endTime: 'EndTime',
      intentionBizId: 'IntentionBizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      bizType: 'string',
      endTime: 'number',
      intentionBizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

