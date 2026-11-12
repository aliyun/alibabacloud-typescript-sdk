// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789012xxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * Filters resources by entity type. Valid values: ram_policy.
   * 
   * @example
   * ram_policy
   */
  cloudAccountResourceEntityType?: string;
  /**
   * @remarks
   * The keyword used for fuzzy matching of the resource name. This is equivalent to LIKE \\"%value%\\".
   * 
   * @example
   * sso
   */
  cloudAccountResourceNameContains?: string;
  /**
   * @remarks
   * The prefix of the resource name used for matching.
   * 
   * @example
   * eiam-
   */
  cloudAccountResourceNamePrefix?: string;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      cloudAccountResourceEntityType: 'CloudAccountResourceEntityType',
      cloudAccountResourceNameContains: 'CloudAccountResourceNameContains',
      cloudAccountResourceNamePrefix: 'CloudAccountResourceNamePrefix',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudAccountResourceEntityType: 'string',
      cloudAccountResourceNameContains: 'string',
      cloudAccountResourceNamePrefix: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

