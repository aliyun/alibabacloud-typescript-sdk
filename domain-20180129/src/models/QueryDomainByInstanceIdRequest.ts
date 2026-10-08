// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainByInstanceIdRequest extends $dara.Model {
  /**
   * @remarks
   * The domain instance ID. Call the [QueryDomainList](https://help.aliyun.com/document_detail/67712.html) API to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * S20131205001****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of API error messages. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The user\\"s IP address. You can use **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

