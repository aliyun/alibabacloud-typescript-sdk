// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppDomainRedirectRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * aliyun.com
   * 
   * @example
   * www.aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the domain name redirect record.
   * 
   * @example
   * 803858889404426240
   */
  recordId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainName: 'string',
      recordId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

