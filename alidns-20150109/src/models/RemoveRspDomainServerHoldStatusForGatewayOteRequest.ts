// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRspDomainServerHoldStatusForGatewayOteRequest extends $dara.Model {
  /**
   * @remarks
   * Idempotency token
   * 
   * This parameter is required.
   * 
   * @example
   * qwoefasdf
   */
  clientToken?: string;
  /**
   * @remarks
   * Domain name
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Description of the status change
   * 
   * @example
   * 实名认证通过，解除serverHold状态
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

