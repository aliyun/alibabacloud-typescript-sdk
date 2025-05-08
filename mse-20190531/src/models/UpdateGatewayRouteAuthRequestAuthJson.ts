// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteAuthRequestAuthJSON extends $dara.Model {
  /**
   * @remarks
   * The authentication type. If an empty string is passed, no authentication type is available. Valid values:
   * 
   * *   JWT
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

