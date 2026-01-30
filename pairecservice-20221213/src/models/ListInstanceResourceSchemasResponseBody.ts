// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourceSchemasResponseBodySchemas extends $dara.Model {
  /**
   * @example
   * default
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListInstanceResourceSchemasResponseBody extends $dara.Model {
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  schemas?: ListInstanceResourceSchemasResponseBodySchemas[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': ListInstanceResourceSchemasResponseBodySchemas },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

