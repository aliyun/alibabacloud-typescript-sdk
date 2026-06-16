// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainInfoForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The customer business ID.
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * yywq.qimengwenhua.com
   */
  domainName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

