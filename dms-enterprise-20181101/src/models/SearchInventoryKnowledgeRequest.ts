// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInventoryKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  jobId?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * 订单
   */
  query?: string;
  /**
   * @example
   * TABLE
   */
  showType?: string;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * confidence
   */
  sortBy?: string;
  /**
   * @example
   * desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      offset: 'Offset',
      query: 'Query',
      showType: 'ShowType',
      size: 'Size',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      offset: 'number',
      query: 'string',
      showType: 'string',
      size: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

