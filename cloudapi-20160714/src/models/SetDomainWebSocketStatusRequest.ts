// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDomainWebSocketStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  actionValue?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * ac.fluvet.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * cf976e63b70c4993807e7bb9345d4695
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * If enable WSS.
   * 
   * @example
   * false
   */
  WSSEnable?: string;
  static names(): { [key: string]: string } {
    return {
      actionValue: 'ActionValue',
      domainName: 'DomainName',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      WSSEnable: 'WSSEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionValue: 'string',
      domainName: 'string',
      groupId: 'string',
      securityToken: 'string',
      WSSEnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

