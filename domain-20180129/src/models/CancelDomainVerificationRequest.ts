// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDomainVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * *   **DOMAINAUDIT**: review a domain name review.
   * *   **AUDITCONTACT**: review a contact.
   * 
   * This parameter is required.
   * 
   * @example
   * AUDITCONTACT
   */
  actionType?: string;
  /**
   * @remarks
   * Thee instance ID of the domain name. You can call the [QueryDomainList](https://help.aliyun.com/document_detail/67712.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * S2019270W570xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the client. Set the value to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
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

