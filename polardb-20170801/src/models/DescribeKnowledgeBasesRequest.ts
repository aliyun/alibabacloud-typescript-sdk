// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for searching knowledge bases.
   * 
   * @example
   * testkb
   */
  keyword?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge space.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the knowledge base.
   * 
   * @example
   * Activation
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      knowledgeSpaceId: 'KnowledgeSpaceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      knowledgeSpaceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

