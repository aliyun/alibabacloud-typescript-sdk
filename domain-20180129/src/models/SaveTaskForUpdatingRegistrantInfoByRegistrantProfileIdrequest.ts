// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForUpdatingRegistrantInfoByRegistrantProfileIDRequest extends $dara.Model {
  /**
   * @remarks
   * A list of domain names. If you specify multiple domain names, pass them as a **list**. Call the [QueryDomainList](https://help.aliyun.com/document_detail/69362.htm?spm=a2c4g.11186623.0.0.33f4253cSJy3m8) API to obtain a list of your domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values:
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
   * The registrant profile ID. Call the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.htm?spm=a2c4g.11186623.0.0.33f420daTwRQaO) API to query the registrant profile ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * Specifies whether to enable a 60-day transfer lock on the domain name after its registrant information is updated. Valid values:
   * 
   * - **false**: Do not apply the lock.
   * 
   * - **true**: Apply the lock.
   * 
   * Default value: **false**.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @remarks
   * The IP address of the user. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      registrantProfileId: 'number',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

