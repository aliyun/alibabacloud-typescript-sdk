// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsShrinkRequest extends $dara.Model {
  filterShrink?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * thread_id01
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

