// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerProhibitStatusForGatewayRequestAddStatusList extends $dara.Model {
  /**
   * @remarks
   * The domain name status.
   * 
   * @example
   * serverDeleteProhibited
   */
  status?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * 实名认证未通过，增加serverUpdateProhibited状态
   */
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

export class UpdateRspDomainServerProhibitStatusForGatewayRequestDeleteStatusList extends $dara.Model {
  /**
   * @remarks
   * The domain name status.
   * 
   * @example
   * serverDeleteProhibited
   */
  status?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * 实名认证通过，删除serverUpdateProhibited状态
   */
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

export class UpdateRspDomainServerProhibitStatusForGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of domain name statuses to add.
   */
  addStatusList?: UpdateRspDomainServerProhibitStatusForGatewayRequestAddStatusList[];
  /**
   * @remarks
   * A parameter that ensures idempotence.
   * 
   * This parameter is required.
   * 
   * @example
   * asdf
   */
  clientToken?: string;
  /**
   * @remarks
   * A collection of domain name statuses to delete.
   */
  deleteStatusList?: UpdateRspDomainServerProhibitStatusForGatewayRequestDeleteStatusList[];
  /**
   * @remarks
   * The domain name whose serverHold status you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      addStatusList: 'AddStatusList',
      clientToken: 'ClientToken',
      deleteStatusList: 'DeleteStatusList',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addStatusList: { 'type': 'array', 'itemType': UpdateRspDomainServerProhibitStatusForGatewayRequestAddStatusList },
      clientToken: 'string',
      deleteStatusList: { 'type': 'array', 'itemType': UpdateRspDomainServerProhibitStatusForGatewayRequestDeleteStatusList },
      domainName: 'string',
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

