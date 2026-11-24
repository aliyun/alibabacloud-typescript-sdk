// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The access mode. Valid values:
   * - **app**: Application access. Filters applications that support application access.
   * - **browser**: Browser access. Filters applications that support browser access.
   * 
   * @example
   * app
   */
  accessModes?: string;
  /**
   * @remarks
   * The address of the private access application. The address must be 1 to 128 characters in length, and can be an IPv4 address, a CIDR block, a domain name, or a wildcard domain name.
   * 
   * @example
   * 192.168.0.0/16
   */
  address?: string;
  /**
   * @remarks
   * The IDs of the private access applications. You can enter up to 100 private access application IDs.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The ID of the connector. You can obtain the value from the following operation: [ListConnectors](~~ListConnectors~~): List connectors.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Filters by health check status. Valid values:
   * * normal: The success rate of the last check is greater than or equal to 95%.
   * * partialError: The success rate of the last check is greater than 0 and less than 95%.
   * * error: The success rate of the last check is 0.
   * * uncompleted: No check results are available.
   * 
   * @example
   * normal
   */
  healthCheckStatus?: string;
  /**
   * @remarks
   * The name of the private access application. The name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
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
   * The ID of the private access policy. You can obtain the value from the following operations:
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): List private access policies.
   * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): Create a private access policy.
   * 
   * @example
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @remarks
   * The status of the private access application. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the private access tag. You can obtain the value from the following operations:
   * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): List private access tags.
   * - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): Create a private access tag.
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
      healthCheckStatus: 'HealthCheckStatus',
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
      healthCheckStatus: 'string',
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

