// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerHoldStatusOteRequest extends $dara.Model {
  /**
   * @example
   * 443F1A21-XXXX-55C4-93E1-FF020DF93D7B
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gatewayId001
   */
  operatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registryGateway
   */
  operatorType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enable
   */
  serverHoldStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
      serverHoldStatus: 'ServerHoldStatus',
      statusMsg: 'StatusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      domainName: 'string',
      operatorId: 'string',
      operatorType: 'string',
      serverHoldStatus: 'string',
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

