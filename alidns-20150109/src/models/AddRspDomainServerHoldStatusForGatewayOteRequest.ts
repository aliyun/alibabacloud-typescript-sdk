// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRspDomainServerHoldStatusForGatewayOteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwoefasdf
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      statusMsg: 'StatusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      domainName: 'string',
      statusMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

