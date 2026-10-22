// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project name to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries to return. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token required for the next query in cursor-based pagination.
   * > Leave this parameter empty for the first query. For subsequent requests, set this parameter to the value of NextToken returned in the previous response.
   * 
   * @example
   * 42bc833a0a0002dae0b5e8707e68181f
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
   * > This parameter takes effect only when NextToken is empty.
   * 
   * @example
   * 2
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
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

