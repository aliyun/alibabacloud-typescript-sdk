// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The language type. The description of the system access policy is returned in the specified language.
   * 
   * - en: English.
   * - zh-CN: Chinese.
   * - ja: Japanese.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Policy Name of the access policy.
   * 
   * Policy Name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access policy. If this parameter is left empty, all types of access policies are listed.
   * 
   * - Custom: custom policy.
   * - System: system policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the principal.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The authorization object type. If this parameter is left empty, all types of authorization objects are listed.
   * 
   * - IMSUser: Resource Access Management (RAM) user.
   * - IMSGroup: RAM user group.
   * - ServiceRole: RAM role.
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the Alibaba Cloud account ID to which the resource group belongs. If this parameter is left empty, all authorization records under the current account are listed.
   * 
   * @example
   * rg-001
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

