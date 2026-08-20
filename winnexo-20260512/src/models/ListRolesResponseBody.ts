// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The role code.
   * 
   * @example
   * string_value
   */
  roleCode?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * string_value
   */
  roleName?: string;
  /**
   * @remarks
   * Indicates whether the enable/disable operation is allowed. Super administrators and application users cannot be switched.
   * 
   * @example
   * true
   */
  toggleable?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      roleCode: 'roleCode',
      roleName: 'roleName',
      toggleable: 'toggleable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      roleCode: 'string',
      roleName: 'string',
      toggleable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The MCP card list.
   */
  items?: ListRolesResponseBodyItems[];
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListRolesResponseBodyItems },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

