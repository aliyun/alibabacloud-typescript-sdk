// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The business description of the graph. This is an empty string if not configured.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  businessProfile?: string;
  /**
   * @remarks
   * The tool display name.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * Specifies whether it is the default group.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      displayName: 'displayName',
      graphName: 'graphName',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      displayName: 'string',
      graphName: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphsResponseBody extends $dara.Model {
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
   * The list of MCP cards.
   * 
   * This parameter is required.
   */
  items?: ListGraphsResponseBodyItems[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
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
      items: { 'type': 'array', 'itemType': ListGraphsResponseBodyItems },
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

