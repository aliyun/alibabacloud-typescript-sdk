// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMessageResponseBodyMessagesContent } from "./ListMessageResponseBodyMessagesContent";


export class ListMessageResponseBodyMessages extends $dara.Model {
  content?: ListMessageResponseBodyMessagesContent;
  /**
   * @example
   * 这是一张小猫钓鱼图
   */
  contentDesc?: string;
  /**
   * @example
   * 1642448000000
   */
  createAt?: number;
  /**
   * @example
   * messageId1
   */
  id?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * runId1
   */
  runId?: string;
  /**
   * @example
   * threadId1
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentDesc: 'contentDesc',
      createAt: 'createAt',
      id: 'id',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListMessageResponseBodyMessagesContent,
      contentDesc: 'string',
      createAt: 'number',
      id: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

