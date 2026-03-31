// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatConfigurationResponseBodyChatConfiguration extends $dara.Model {
  /**
   * @example
   * {"DingTalkClientId": "dingpxlbxp0rgs7uxmtb", "DingTalkClientSecret": "******", "DingTalkTemplateId": "381c5aee-f8af-48a4-94be-cce587e42ea4.schema"}
   */
  configuration?: string;
  /**
   * @example
   * 2025-12-26T09:53:02+00:00
   */
  createdDate?: string;
  /**
   * @example
   * chatops
   */
  name?: string;
  /**
   * @example
   * {"URL": "https://1407907063606569.appflow.aliyunnest.com/webhook/"}
   */
  outputs?: string;
  /**
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @example
   * s
   */
  resourceGroupId?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  /**
   * @example
   * 2026-01-07T02:14:55+00:00
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      createdDate: 'CreatedDate',
      name: 'Name',
      outputs: 'Outputs',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      type: 'Type',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      createdDate: 'string',
      name: 'string',
      outputs: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      type: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * {
   *   "Name": "chatops",
   *   "Type": "DingTalk",
   *   "RamRole": "OOSServiceRole",
   *   "Configuration": "{\\"DingTalkClientId\\": \\"dingpxlbxp0rgs7uxmtb\\", \\"DingTalkClientSecret\\": \\"******\\", \\"DingTalkTemplateId\\": \\"381c5aee-f8af-48a4-94be-cce587e42ea4.schema\\"}",
   *   "ResourceGroupId": "s",
   *   "CreatedDate": "2025-12-26T09:53:02+00:00",
   *   "UpdatedDate": "2026-01-07T02:14:55+00:00",
   *   "Outputs": "{\\"URL\\": \\"https://1407907063606569.appflow.aliyunnest.com/webhook/\\"}",
   *   "RequestId": "4DB0****1234"
   * }
   */
  chatConfiguration?: GetChatConfigurationResponseBodyChatConfiguration;
  /**
   * @example
   * 4DB0****1234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfiguration: 'ChatConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfiguration: GetChatConfigurationResponseBodyChatConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.chatConfiguration && typeof (this.chatConfiguration as any).validate === 'function') {
      (this.chatConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

