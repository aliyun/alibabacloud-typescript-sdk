// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionRequest extends $dara.Model {
  appType?: string;
  corpId?: string;
  groupId?: string;
  language?: string;
  nameSpace?: string;
  orderNumber?: string;
  processInstanceId?: string;
  systemToken?: string;
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

