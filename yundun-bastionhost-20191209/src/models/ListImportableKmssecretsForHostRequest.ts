// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportableKMSSecretsForHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host to query.
   * 
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: number;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the credential to query. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries to return. If you do not specify this parameter, the default value is 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token required for the next cursor-based query.
   * > Leave this parameter empty for the initial query. For subsequent requests, specify the value of the NextToken field returned in the previous response.
   * 
   * @example
   * 42bc833a0a0002dae0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

