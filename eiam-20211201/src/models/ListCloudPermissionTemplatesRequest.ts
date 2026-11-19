// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudPermissionTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * Filters the results by template name prefix.
   * 
   * @example
   * AdminAccess
   */
  cloudPermissionTemplateNamePrefix?: string;
  /**
   * @remarks
   * Filters the results by permission template sharing mode. Valid values: shared and exclusive. If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * shared
   */
  cloudPermissionTemplateSharingMode?: string;
  /**
   * @remarks
   * Filters the results by permission template usage type. Valid values: user (privilege escalation for human users) and application (privilege escalation for M2M applications).
   * 
   * @example
   * user
   */
  cloudPermissionTemplateUsageType?: string;
  /**
   * @remarks
   * Filters the results by creator type. Valid values: idaas_admin and idaas_user.
   * 
   * @example
   * idaas_user
   */
  creatorType?: string;
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
   * The maximum number of entries to return per page in a paged query. This parameter is used for paging. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token, which is the value of the NextToken parameter returned by the previous API call.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      cloudPermissionTemplateNamePrefix: 'CloudPermissionTemplateNamePrefix',
      cloudPermissionTemplateSharingMode: 'CloudPermissionTemplateSharingMode',
      cloudPermissionTemplateUsageType: 'CloudPermissionTemplateUsageType',
      creatorType: 'CreatorType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudPermissionTemplateNamePrefix: 'string',
      cloudPermissionTemplateSharingMode: 'string',
      cloudPermissionTemplateUsageType: 'string',
      creatorType: 'string',
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

