// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name group ID. You can obtain it by using the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupId: 'DomainGroupId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupId: 'number',
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

