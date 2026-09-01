// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseFilesRequest extends $dara.Model {
  /**
   * @example
   * doc_a,doc_b
   */
  fileIds?: string;
  /**
   * @example
   * 财报
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * pkbl-2ze123456789abc
   */
  linkId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
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

