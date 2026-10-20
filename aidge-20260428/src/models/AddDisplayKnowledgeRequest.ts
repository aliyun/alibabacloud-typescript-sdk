// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDisplayKnowledgeRequestRecords extends $dara.Model {
  /**
   * @remarks
   * The HTTP(S) URL of the product image.
   * 
   * @example
   * https://xxxx/img_1784599244373_9c2309a0.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The SKU ID. If this parameter is left empty, the platform generates the ID.
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
      skuId: 'SkuId',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
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

export class AddDisplayKnowledgeRequest extends $dara.Model {
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
   * The records to add. A maximum of 500 records are supported.
   * 
   * This parameter is required.
   */
  records?: AddDisplayKnowledgeRequestRecords[];
  static names(): { [key: string]: string } {
    return {
      ragId: 'RagId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ragId: 'string',
      records: { 'type': 'array', 'itemType': AddDisplayKnowledgeRequestRecords },
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

