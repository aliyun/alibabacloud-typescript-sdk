// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemasResponseBodySchemas } from "./ListSchemasResponseBodySchemas";


export class ListSchemasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The queried schemas.
   */
  schemas?: ListSchemasResponseBodySchemas;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemas: 'Schemas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      schemas: ListSchemasResponseBodySchemas,
      status: 'string',
    };
  }

  validate() {
    if(this.schemas && typeof (this.schemas as any).validate === 'function') {
      (this.schemas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

