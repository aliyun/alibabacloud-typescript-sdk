// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems extends $dara.Model {
  /**
   * @remarks
   * The request or response.
   * 
   * @example
   * Response
   */
  directionType?: string;
  /**
   * @remarks
   * The header key.
   * 
   * @example
   * debug
   */
  key?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * Add
   */
  opType?: string;
  /**
   * @remarks
   * The header value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      directionType: 'DirectionType',
      key: 'Key',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directionType: 'string',
      key: 'string',
      opType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

