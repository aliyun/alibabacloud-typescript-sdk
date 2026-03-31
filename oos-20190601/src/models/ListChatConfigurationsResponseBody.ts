// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatConfigurationsResponseBodyChatConfigurations extends $dara.Model {
  /**
   * @example
   * 2025-12-10T10:09:32+00:00
   */
  createdDate?: string;
  /**
   * @example
   * test-wechat
   */
  name?: string;
  /**
   * @example
   * {"URL": "https://1407907063606569.appflow.aliyunnes", "AesKey": "UKAxyRabaJlaDxS3XZ6st18grPteemRtGeDVVgF"}
   */
  outputs?: string;
  /**
   * @example
   * OOSServiceRole
   */
  ramRole?: string;
  /**
   * @example
   * WeChat
   */
  type?: string;
  /**
   * @example
   * 2025-12-28T13:59:48+00:00
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdDate: 'CreatedDate',
      name: 'Name',
      outputs: 'Outputs',
      ramRole: 'RamRole',
      type: 'Type',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDate: 'string',
      name: 'string',
      outputs: 'string',
      ramRole: 'string',
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

export class ListChatConfigurationsResponseBody extends $dara.Model {
  /**
   * @example
   * [{"Name": "test-wechat", "CreatedDate": "2025-12-10T10:09:32+00:00", "UpdatedDate": "2025-12-28T13:59:48+00:00", "RamRole": "OOSServiceRole", "Type": "WeChat", "Outputs": "{\\"URL\\": \\"https://1407907063606569.appflow.aliyunnes\\"}]}
   */
  chatConfigurations?: ListChatConfigurationsResponseBodyChatConfigurations[];
  /**
   * @example
   * 4DB0****1234
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfigurations: 'ChatConfigurations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfigurations: { 'type': 'array', 'itemType': ListChatConfigurationsResponseBodyChatConfigurations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chatConfigurations)) {
      $dara.Model.validateArray(this.chatConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

