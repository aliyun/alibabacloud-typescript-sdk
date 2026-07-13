// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRspDomainServerHoldStatusForGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * An idempotency parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * token123
   */
  clientToken?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The status description.
   * 
   * This parameter is required.
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

