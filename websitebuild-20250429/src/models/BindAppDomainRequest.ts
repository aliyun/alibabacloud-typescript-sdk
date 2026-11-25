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
   * The optional domain hosting method. A value of CUSTOMER_ESA indicates that the customer\"s own ESA is used. If you do not specify this parameter, the original hosting process is used. This parameter is supported only when DomainType is set to CUSTOM.
   * 
   * @example
   * CDN
   */
  deployType?: string;
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
   * The domain management type. Valid values: CUSTOM and PLATFORM_PREFIX. If you do not specify this parameter, CUSTOM is used by default.
   * 
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * The extended information (OverwriteExistingRecord).
   * 
   * @example
   * {\"deliveryNodeName\":\"Website acceptance\",\"deliveryNodeStatus\":\"Reject\",\"deliveryOperatorRole\":\"Customer\"}
   */
  extend?: string;
  /**
   * @remarks
   * The operation type for domain binding.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deployType: 'DeployType',
      domainName: 'DomainName',
      domainType: 'DomainType',
      extend: 'Extend',
      operateType: 'OperateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deployType: 'string',
      domainName: 'string',
      domainType: 'string',
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

