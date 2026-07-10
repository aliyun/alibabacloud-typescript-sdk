// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountRolesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field. Valid values:
   * - CloudAccountRoleId: the cloud role ID.
   * - CloudAccountRoleName: the cloud role name.
   * - CloudAccountRoleExternalId: the external identifier of the cloud role.
   * - CloudAccountRoleUsageType: the usage type of the cloud role.
   * 
   * @example
   * CloudAccountRoleId
   */
  name?: string;
  /**
   * @remarks
   * The values of the filter field.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccountRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListCloudAccountRolesRequestFilter[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of records per page.
   * 
   * - If this parameter is not specified, the default value is 20.
   * 
   * - The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that identifies the start position of the next page.
   * 
   * - If this parameter is not specified, the query starts from the first page.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      filter: { 'type': 'array', 'itemType': ListCloudAccountRolesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

