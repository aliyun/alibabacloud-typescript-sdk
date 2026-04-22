// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatContentResponseBody extends $dara.Model {
  /**
   * @example
   * PLAN
   */
  category?: string;
  /**
   * @example
   * 0
   */
  checkpoint?: number;
  /**
   * @example
   * Data understanding completed.
   */
  content?: string;
  /**
   * @example
   * str
   */
  contentType?: string;
  /**
   * @example
   * DATA
   */
  eventType?: string;
  /**
   * @example
   * 20
   */
  level?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      checkpoint: 'checkpoint',
      content: 'content',
      contentType: 'content_type',
      eventType: 'event_type',
      level: 'level',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkpoint: 'number',
      content: 'string',
      contentType: 'string',
      eventType: 'string',
      level: 'number',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

