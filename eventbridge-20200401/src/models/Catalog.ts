// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * The comment or description of the data catalog
   * 
   * @example
   * 测试数据目录
   */
  comment?: string;
  /**
   * @remarks
   * The connection name associated with a mounted-type Catalog. Only has a value when Provider is MySQL/PostgreSQL/Elasticsearch
   * 
   * @example
   * my_connection
   */
  connectionName?: string;
  /**
   * @remarks
   * The unique identifier name of the data catalog
   * 
   * @example
   * my_catalog
   */
  name?: string;
  /**
   * @remarks
   * Extended properties (JSON object). The Elasticsearch type contains information such as IndexPattern
   * 
   * @example
   * {"IndexPattern":"my-index-*"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The data source provider. EventHouse is the built-in storage; MySQL/PostgreSQL/Elasticsearch are externally mounted
   * 
   * @example
   * EventHouse
   */
  provider?: string;
  /**
   * @remarks
   * The type of the data catalog, such as RELATIONAL
   * 
   * @example
   * RELATIONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      connectionName: 'ConnectionName',
      name: 'Name',
      properties: 'Properties',
      provider: 'Provider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      connectionName: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

