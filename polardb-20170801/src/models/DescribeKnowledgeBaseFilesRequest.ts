// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of file IDs, separated by commas (,).
   * 
   * @example
   * doc_a,doc_b
   */
  fileIds?: string;
  /**
   * @remarks
   * The keyword used to filter file names.
   * 
   * @example
   * Financial report
   */
  keyword?: string;
  /**
   * @remarks
   * The unique ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The unique ID of the synchronization link.
   * 
   * @example
   * pkbl-2ze123456789abc
   */
  linkId?: string;
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
   * The number of records per page.
   * 
   * @example
   * 20
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
   * The source type.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      fileIds: 'FileIds',
      keyword: 'Keyword',
      knowledgeBaseId: 'KnowledgeBaseId',
      linkId: 'LinkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIds: 'string',
      keyword: 'string',
      knowledgeBaseId: 'string',
      linkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

