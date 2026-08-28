// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of AI applications bound to the knowledge base.
   * 
   * @example
   * 2
   */
  bindingAppCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge base.
   * 
   * @example
   * pkb-xxxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The type of the knowledge base. Valid values:
   * - PUBLIC: public.
   * - PERSONAL: personal.
   * 
   * @example
   * PUBLIC
   */
  knowledgeBaseType?: string;
  /**
   * @remarks
   * The ID of the knowledge space.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The status of the knowledge base.
   * 
   * @example
   * Activation
   */
  status?: string;
  /**
   * @remarks
   * The total number of documents.
   * 
   * @example
   * 1
   */
  totalDocs?: number;
  /**
   * @remarks
   * The total size in bytes.
   * 
   * @example
   * 231984
   */
  totalSizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      bindingAppCount: 'BindingAppCount',
      creationTime: 'CreationTime',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeBaseType: 'KnowledgeBaseType',
      knowledgeSpaceId: 'KnowledgeSpaceId',
      name: 'Name',
      status: 'Status',
      totalDocs: 'TotalDocs',
      totalSizeBytes: 'TotalSizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingAppCount: 'number',
      creationTime: 'string',
      description: 'string',
      knowledgeBaseId: 'string',
      knowledgeBaseType: 'string',
      knowledgeSpaceId: 'string',
      name: 'string',
      status: 'string',
      totalDocs: 'number',
      totalSizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of knowledge bases.
   */
  items?: DescribeKnowledgeBasesResponseBodyItems[];
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
   * The number of entries per page. Valid values: **30**, **50**, and **100**.
   *                               
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeKnowledgeBasesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

