// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuggestShrinkableNodesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * ``192.168.**.**``
   */
  host?: string;
  /**
   * @remarks
   * The access port number of the node.
   * 
   * @example
   * 9200
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuggestShrinkableNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
   */
  result?: GetSuggestShrinkableNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetSuggestShrinkableNodesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

