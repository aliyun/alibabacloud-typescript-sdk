// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseSchemaResponseBodyResult extends $dara.Model {
  /**
   * @example
   * id
   */
  fieldName?: string;
  /**
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @example
   * FT_UINT64
   */
  fieldTypeDetail?: { [key: string]: any };
  /**
   * @example
   * test_tusou_v2
   */
  indexName?: string;
  /**
   * @example
   * NUMBER
   */
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldType: 'fieldType',
      fieldTypeDetail: 'fieldTypeDetail',
      indexName: 'indexName',
      indexType: 'indexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldType: 'string',
      fieldTypeDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      indexName: 'string',
      indexType: 'string',
    };
  }

  validate() {
    if(this.fieldTypeDetail) {
      $dara.Model.validateMap(this.fieldTypeDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

