// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerProhibitStatusForGatewayOteRequestAddStatusList extends $dara.Model {
  /**
   * @remarks
   * Domain name status.
   * 
   * @example
   * serverDeleteProhibited
   */
  status?: string;
  /**
   * @remarks
   * Description of the status.
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

export class UpdateRspDomainServerProhibitStatusForGatewayOteRequestDeleteStatusList extends $dara.Model {
  /**
   * @remarks
   * Domain name status.
   * 
   * @example
   * serverDeleteProhibited
   */
  status?: string;
  /**
   * @remarks
   * Description of the status.
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

export class UpdateRspDomainServerProhibitStatusForGatewayOteRequest extends $dara.Model {
  /**
   * @remarks
   * List of domain name statuses to add.
   */
  addStatusList?: UpdateRspDomainServerProhibitStatusForGatewayOteRequestAddStatusList[];
  /**
   * @remarks
   * Idempotency token.
   * 
   * This parameter is required.
   * 
   * @example
   * qwoefasdf
   */
  clientToken?: string;
  /**
   * @remarks
   * List of domain name statuses to remove.
   */
  deleteStatusList?: UpdateRspDomainServerProhibitStatusForGatewayOteRequestDeleteStatusList[];
  /**
   * @remarks
   * Domain name.
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
      addStatusList: { 'type': 'array', 'itemType': UpdateRspDomainServerProhibitStatusForGatewayOteRequestAddStatusList },
      clientToken: 'string',
      deleteStatusList: { 'type': 'array', 'itemType': UpdateRspDomainServerProhibitStatusForGatewayOteRequestDeleteStatusList },
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

