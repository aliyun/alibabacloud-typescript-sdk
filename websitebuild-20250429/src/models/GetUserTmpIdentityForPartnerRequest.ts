// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserTmpIdentityForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The purpose of the authorization.
   * 
   * @example
   * BindDomain
   */
  authPurpose?: string;
  /**
   * @remarks
   * The business ID of the customer.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Specifies whether fuzzy match is supported for port numbers. Set this parameter to **1** to enable fuzzy match. Other values or an empty value indicate that fuzzy match is not supported.
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"视觉设计确认\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The service-linked role.
   * > For information about the service-linked roles supported by ApsaraDB RDS, see [Service-linked roles](https://help.aliyun.com/document_detail/342840.html).
   * 
   * @example
   * AliyunServiceRoleForSasCspm
   */
  serviceLinkedRole?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1231331311
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authPurpose: 'AuthPurpose',
      bizId: 'BizId',
      extend: 'Extend',
      serviceLinkedRole: 'ServiceLinkedRole',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPurpose: 'string',
      bizId: 'string',
      extend: 'string',
      serviceLinkedRole: 'string',
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

