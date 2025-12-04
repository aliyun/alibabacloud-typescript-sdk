// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRspDomainServerProhibitStatusForGatewayRequestAddStatusList extends $dara.Model {
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

export class UpdateRspDomainServerProhibitStatusForGatewayRequestDeleteStatusList extends $dara.Model {
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

export class UpdateRspDomainServerProhibitStatusForGatewayRequest extends $dara.Model {
  addStatusList?: UpdateRspDomainServerProhibitStatusForGatewayRequestAddStatusList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdf
   */
  clientToken?: string;
  deleteStatusList?: UpdateRspDomainServerProhibitStatusForGatewayRequestDeleteStatusList[];
  /**
   * @remarks
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

