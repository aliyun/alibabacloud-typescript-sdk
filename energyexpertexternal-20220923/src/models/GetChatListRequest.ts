// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatListRequest extends $dara.Model {
  /**
   * @remarks
   * Pagination parameter, page number, starting from 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Q&A session ID, used to record multiple Q&As for the same user.
   * 
   * This parameter is required.
   * 
   * @example
   * bfce2248-1546-4298-8bcf-70ac26e69646
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageSize: 'string',
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

