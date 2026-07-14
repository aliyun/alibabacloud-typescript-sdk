// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryListByBizTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Unique business identifier. When bizType is LibraryChat, bizId is the document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * GysYBsxx
   */
  bizId?: string;
  /**
   * @remarks
   * Business type. Supported values are LlmChat and LibraryChat.
   * 
   * This parameter is required.
   * 
   * @example
   * LibraryChat
   */
  bizType?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      page: 'number',
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

