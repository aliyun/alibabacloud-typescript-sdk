// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInventorySchemaResponseBodySchemas } from "./GetInventorySchemaResponseBodySchemas";


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

