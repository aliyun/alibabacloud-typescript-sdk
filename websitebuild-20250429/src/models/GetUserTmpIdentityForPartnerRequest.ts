// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserTmpIdentityForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization purpose.
   * 
   * @example
   * BindDomain
   */
  authPurpose?: string;
  /**
   * @remarks
   * The customer business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Specifies whether fuzzy match is supported for port numbers. To enable fuzzy match, set this parameter to **1**. Any other value or an empty value indicates that fuzzy match is not supported.
   * 
   * @example
   * {"deliveryNodeName":"Visual Design Confirmation","deliveryNodeStatus":"Reject","deliveryOperatorRole":"Customer"}
   */
  extend?: string;
  /**
   * @remarks
   * The service-linked role.
   * > For more information about the service-linked roles supported by RDS, see [Service-linked roles](https://help.aliyun.com/document_detail/342840.html).
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

