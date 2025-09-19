// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAppDomainRequest extends $dara.Model {
  /**
   * @example
   * WD20250820143531000001
   */
  bizId?: string;
  /**
   * @example
   * xiaoniu.link
   */
  domainName?: string;
  extend?: string;
  /**
   * @example
   * vul_fix
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
      extend: 'Extend',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainName: 'string',
      extend: 'string',
      operateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

