// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserTmpIdentityForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization purpose
   * 
   * @example
   * BindDomain
   */
  authPurpose?: string;
  /**
   * @remarks
   * Customer business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Whether the port number supports fuzzy query. To enable fuzzy query, set the value of this parameter to **1**. Any other value or an empty value indicates that fuzzy query is not supported.
   * 
   * @example
   * {\\"deliveryNodeName\\":\\"视觉设计确认\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
   */
  extend?: string;
  /**
   * @remarks
   * Service-linked role.  
   * > For service-linked roles supported by RDS, see [Service-linked Role](https://help.aliyun.com/document_detail/342840.html).
   * 
   * @example
   * AliyunServiceRoleForSasCspm
   */
  serviceLinkedRole?: string;
  /**
   * @remarks
   * User ID
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

