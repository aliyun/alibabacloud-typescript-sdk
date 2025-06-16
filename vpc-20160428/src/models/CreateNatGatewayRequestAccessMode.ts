// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayRequestAccessMode extends $dara.Model {
  /**
   * @remarks
   * Access mode. Valid values:
   * 
   * - **route**: route mode
   * 
   * - **tunnel**: tunnel mode
   * 
   * > If this parameter is specified, you must set **PrivateLinkEnabled** to **true**.
   * 
   * @example
   * route
   */
  modeValue?: string;
  /**
   * @remarks
   * Tunnel mode type:
   * 
   * - **geneve**: Geneve type
   * 
   * > This value takes effect if the access mode is the tunnel mode.
   */
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      modeValue: 'ModeValue',
      tunnelType: 'TunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeValue: 'string',
      tunnelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

