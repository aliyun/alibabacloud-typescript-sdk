// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAppDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250820143531000001
   */
  bizId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * xiaoniu.link
   */
  domainName?: string;
  /**
   * @remarks
   * The extended information (OverwriteExistingRecord).
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"网站验收\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The operation type for domain name binding.
   * 
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

