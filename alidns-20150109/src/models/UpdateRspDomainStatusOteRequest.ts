// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainStatusOteRequestAddStatusList extends $dara.Model {
  /**
   * @example
   * serverDeleteProhibited
   */
  status?: string;
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      statusMsg: 'StatusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

export class UpdateRspDomainStatusOteRequestDeleteStatusList extends $dara.Model {
  /**
   * @example
   * serverDeleteProhibited
   */
  status?: string;
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      statusMsg: 'StatusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

export class UpdateRspDomainStatusOteRequest extends $dara.Model {
  /**
   * @example
   * [{"Status":"renewProhibited","StatusMsg":"test"}]
   */
  addStatusList?: UpdateRspDomainStatusOteRequestAddStatusList[];
  /**
   * @example
   * 443F1A21-XXXX-55C4-93E1-FF020DF93D7B
   */
  clientToken?: string;
  /**
   * @example
   * [{"Status":"renewProhibited","StatusMsg":"test"}]
   */
  deleteStatusList?: UpdateRspDomainStatusOteRequestDeleteStatusList[];
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
  static names(): { [key: string]: string } {
    return {
      addStatusList: 'AddStatusList',
      clientToken: 'ClientToken',
      deleteStatusList: 'DeleteStatusList',
      domainName: 'DomainName',
      operatorId: 'OperatorId',
      operatorType: 'OperatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addStatusList: { 'type': 'array', 'itemType': UpdateRspDomainStatusOteRequestAddStatusList },
      clientToken: 'string',
      deleteStatusList: { 'type': 'array', 'itemType': UpdateRspDomainStatusOteRequestDeleteStatusList },
      domainName: 'string',
      operatorId: 'string',
      operatorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addStatusList)) {
      $dara.Model.validateArray(this.addStatusList);
    }
    if(Array.isArray(this.deleteStatusList)) {
      $dara.Model.validateArray(this.deleteStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

