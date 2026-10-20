// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDisplayKnowledgeRequestRecords extends $dara.Model {
  /**
   * @remarks
   * The HTTP or HTTPS URL of the product image.
   * 
   * @example
   * https://xxxx/96f21ebdaeeba27a.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 1489638581
   */
  recordId?: number;
  /**
   * @remarks
   * The SKU ID. If this parameter is not empty, the original value is overwritten.
   * 
   * @example
   * sku-001
   */
  skuId?: string;
  /**
   * @remarks
   * The SKU name.
   * 
   * @example
   * Product front image
   */
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      recordId: 'RecordId',
      skuId: 'SkuId',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      recordId: 'number',
      skuId: 'string',
      skuName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDisplayKnowledgeRequest extends $dara.Model {
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
   * The records to update. A maximum of 500 records can be specified.
   * 
   * This parameter is required.
   */
  records?: UpdateDisplayKnowledgeRequestRecords[];
  static names(): { [key: string]: string } {
    return {
      ragId: 'RagId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ragId: 'string',
      records: { 'type': 'array', 'itemType': UpdateDisplayKnowledgeRequestRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

