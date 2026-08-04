// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * - **app**: application access. Filters applications that support application access.
   * - **browser**: browser access. Filters applications that support browser access.
   * 
   * @example
   * app
   */
  accessModes?: string;
  /**
   * @remarks
   * The address of the internal-facing access application. The address is 1 to 128 characters in length and supports IPv4 addresses, CIDR blocks, domain names, and wildcard domain names.
   * 
   * @example
   * 192.168.0.0/16
   */
  address?: string;
  /**
   * @remarks
   * The IDs of internal-facing access applications. You can specify up to 100 application IDs.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The connector ID. You can obtain the ID from the [ListConnectors](~~ListConnectors~~) operation.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The page number of the current page displayed in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the internal-facing access application. The name is 1 to 128 characters in length, supports Chinese and uppercase and lowercase letters, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the internal-facing access policy. You can obtain the ID from the following operations:
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): queries internal-facing access policies in batches.
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): creates an internal-facing access policy.
   * 
   * @example
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @remarks
   * The status of the internal-facing access application. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the internal-facing access tag. You can obtain the ID from the following operations:
   * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): queries internal-facing access tags in batches.
   * - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): creates an internal-facing access tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      address: 'Address',
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      status: 'Status',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      address: 'string',
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      status: 'string',
      tagId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

