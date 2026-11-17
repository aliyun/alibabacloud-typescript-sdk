// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatMessageContentsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum length of the attachment content.
   * 
   * @example
   * 100000
   */
  maxCharsPerAttachment?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * source-chat-1
   */
  sourceId?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      maxCharsPerAttachment: 'maxCharsPerAttachment',
      page: 'page',
      pageSize: 'pageSize',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCharsPerAttachment: 'number',
      page: 'number',
      pageSize: 'number',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

