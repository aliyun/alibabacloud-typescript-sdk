// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportableKMSSecretsForHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * > Call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: number;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to get this ID.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the secret to search for. Fuzzy matching is supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * > You do not need to specify this parameter for the first request. For subsequent requests, use the `NextToken` value from the previous response.
   * 
   * @example
   * 42bc833a0a0002dae0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For details about the mapping between region IDs and region names, see [Regions and availability zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'number',
      instanceId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

