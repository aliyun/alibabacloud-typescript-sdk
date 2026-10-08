// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOperationAuditInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The information to be reviewed. The displayed information varies by business type.
   * 
   * @example
   * 个人 {"regType":1,"registrantName":"张三","registrantNo":"2201919190**","telephone":"1390123****","account":"zhangsan@alimail.com","reason":1,"remark":"账号丢失"} 企业 {"regType":2,"registrantName":"华大信通","operatorName":"王武","operatorNo":"2201811987101901**",      "operatorPhone":"1390123****","account":"wangwu@alimail.com","companyNo":"91361100MA35N6****","reason":2,"remark":"账号丢失"}
   */
  auditInfo?: string;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * **1**: Transfer a domain name offline, that is, transfer the domain name from the current Alibaba Cloud account to another Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * The domain name. You can specify one or more domain names, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx.com,yyyy.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The review ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditType: 'AuditType',
      domainName: 'DomainName',
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditType: 'number',
      domainName: 'string',
      id: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

