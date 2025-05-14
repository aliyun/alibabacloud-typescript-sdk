// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * ding123
   */
  corpId?: string;
  /**
   * @example
   * c-xxafafaf
   */
  groupId?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * dingtalk
   */
  nameSpace?: string;
  /**
   * @example
   * o-YDJKIxxx
   */
  orderNumber?: string;
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
  processInstanceId?: string;
  /**
   * @example
   * hexxyy
   */
  systemToken?: string;
  /**
   * @example
   * hexabc1234
   */
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      corpId: 'CorpId',
      groupId: 'GroupId',
      language: 'Language',
      nameSpace: 'NameSpace',
      orderNumber: 'OrderNumber',
      processInstanceId: 'ProcessInstanceId',
      systemToken: 'SystemToken',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      corpId: 'string',
      groupId: 'string',
      language: 'string',
      nameSpace: 'string',
      orderNumber: 'string',
      processInstanceId: 'string',
      systemToken: 'string',
      systemType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

