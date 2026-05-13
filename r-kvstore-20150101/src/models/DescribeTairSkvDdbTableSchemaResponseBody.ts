// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairSkvDdbTableSchemaResponseBody extends $dara.Model {
  /**
   * @example
   * A1604E1B-6825-1577-BBDA-2A64E8D5F126
   */
  requestId?: string;
  /**
   * @example
   * {"attributeDefinitions":[{"attributeType":"S","attributeName":"pk"},{"attributeType":"S","attributeName":"sk"}],"keySchema":[{"attributeName":"pk","keyType":"HASH"},{"attributeName":"sk","keyType":"RANGE"}]}
   */
  schema?: string;
  /**
   * @example
   * {"attributeName":"Expiretime","enabled":true}
   */
  ttlSpec?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
      ttlSpec: 'TtlSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: 'string',
      ttlSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

