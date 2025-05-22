// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentionNoteResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-01-25 10:21:38
   */
  createTime?: string;
  /**
   * @example
   * I20210420142416000001
   */
  intentionBizId?: string;
  note?: string;
  /**
   * @example
   * 1
   */
  source?: number;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentionBizId: 'IntentionBizId',
      note: 'Note',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      intentionBizId: 'string',
      note: 'string',
      source: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

