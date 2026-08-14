// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsNotForProjectAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The project authorization ID.
   * > You can call the ListProjectAuthorizations operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authorizationId?: number;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the bastion host instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost_std_intl-sg-uq833e2dz02
   */
  instanceId?: string;
  /**
   * @remarks
   * The project name to query. Fuzzy match is supported.
   * 
   * @example
   * name
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of projects to return per request. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token. Leave this parameter empty or do not specify this parameter for the first request.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to skip.
   * 
   * > This parameter takes effect only when NextToken is empty.
   * 
   * @example
   * 0
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      skip: 'Skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      instanceId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      skip: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

