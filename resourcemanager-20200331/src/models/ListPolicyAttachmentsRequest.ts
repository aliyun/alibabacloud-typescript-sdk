// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the description of the system policy. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
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
   * The name of the permission policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the permission policy. If you do not configure this parameter, all types of policies are returned. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which you want to attach the permission policy.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which you want to attach the permission policy. If you do not configure this parameter, the system lists all types of objects. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs. If you do not configure this parameter, the system lists all policy attachment records within the current account.
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

