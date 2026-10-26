// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersNotForProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-i7m2d7zrw11
   */
  instanceId?: string;
  /**
   * @remarks
   * The UIDs of the member accounts to query. Fuzzy match is supported.
   * 
   * @example
   * 162****5213
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return. If you do not specify this parameter, the default value 20 is used. You can query up to 100 entries at a time.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. For the first request, leave this parameter empty or pass an empty string.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The project ID.
   * > You can call the ListProjects operation to obtain this parameter.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to skip.
   * > This parameter takes effect only when NextToken is empty.
   * 
   * @example
   * 0
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      skip: 'Skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectId: 'number',
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

