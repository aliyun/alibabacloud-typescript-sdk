// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventorySchemaResponseBodySchemasAttributes extends $dara.Model {
  /**
   * @remarks
   * The data type of the property.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * ApplicationType
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBodySchemas extends $dara.Model {
  /**
   * @remarks
   * The properties of the configuration list.
   */
  attributes?: GetInventorySchemaResponseBodySchemasAttributes[];
  /**
   * @remarks
   * The name of the configuration list.
   * 
   * @example
   * ACS:Application
   */
  typeName?: string;
  /**
   * @remarks
   * The version of the configuration list.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      typeName: 'TypeName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemasAttributes },
      typeName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that was used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfh8MVLQI9AuKGACLgjbsXbWs-Mna47IDM6tr6wK7TZ1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89117642-7167-4F4D-B7F1-876582279E3E
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed configurations of the configuration list.
   */
  schemas?: GetInventorySchemaResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemas },
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

