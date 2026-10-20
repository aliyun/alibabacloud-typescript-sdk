// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDisplayKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rag_xxx
   */
  ragId?: string;
  /**
   * @remarks
   * The SKU ID for exact match.
   * 
   * @example
   * sku-001
   */
  skuId?: string;
  /**
   * @remarks
   * The keyword in the SKU name.
   * 
   * @example
   * Product front image
   */
  skuName?: string;
  /**
   * @remarks
   * The list of record statuses. Valid values: UPDATING, EMBEDDED, and FAILED.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      ragId: 'RagId',
      skuId: 'SkuId',
      skuName: 'SkuName',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      ragId: 'string',
      skuId: 'string',
      skuName: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

