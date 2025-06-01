// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal access application. You can obtain the application ID by calling the following operations:
   * 
   * *   [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): queries all internal access applications.
   * *   [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): creates an internal access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the internal access tag. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the internal access policy. You can obtain the policy ID by calling the following operations:
   * 
   * *   [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): queries all internal access policies.
   * *   [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): creates an internal access policy.
   * 
   * @example
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the simple query mode. A value of true specifies that policy IDs are not queried.
   * 
   * @example
   * true
   */
  simpleMode?: boolean;
  /**
   * @remarks
   * The IDs of internal access tags. You can specify up to 100 tag IDs.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      simpleMode: 'SimpleMode',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      simpleMode: 'boolean',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

