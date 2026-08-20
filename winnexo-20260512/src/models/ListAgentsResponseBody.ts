// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The authentication mode.
   * 
   * @example
   * string_value
   */
  authMode?: string;
  /**
   * @remarks
   * The display name of the tool.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the account is activated.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      displayName: 'displayName',
      isActive: 'isActive',
      operatingObjectName: 'operatingObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      displayName: 'string',
      isActive: 'boolean',
      operatingObjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBody extends $dara.Model {
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
   * The list of skill cards.
   */
  items?: ListAgentsResponseBodyItems[];
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
   * The request ID.
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
      items: { 'type': 'array', 'itemType': ListAgentsResponseBodyItems },
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

