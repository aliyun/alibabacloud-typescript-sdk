// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSchemasResponseBodyItemsSchema extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBodyItems extends $dara.Model {
  schema?: DescribeSchemasResponseBodyItemsSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeSchemasResponseBodyItemsSchema },
    };
  }

  validate() {
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried databases.
   */
  items?: DescribeSchemasResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSchemasResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

