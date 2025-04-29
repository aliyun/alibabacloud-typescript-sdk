// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeManagedInstancesRequestTag } from "./DescribeManagedInstancesRequestTag";


export class DescribeManagedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F7494****
   */
  activationId?: string;
  /**
   * @remarks
   * The ID of managed instance N. Valid values of N: 1 to 50.
   * 
   * @example
   * mi-hz018jrc1o0****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The internal or public IP address of the managed instance.
   * 
   * @example
   * ``192.168.**.**``
   */
  instanceIp?: string;
  /**
   * @remarks
   * The name of the managed instance.
   * 
   * @example
   * my-webapp-server
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system type of the managed instance. Valid values:
   * 
   * *   windows
   * *   linux
   * *   FreeBSD
   * 
   * @example
   * windows
   */
  osType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. Supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the managed instance belongs.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the managed instance.
   */
  tag?: DescribeManagedInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      activationId: 'ActivationId',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osType: 'OsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      instanceIp: 'string',
      instanceName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      osType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeManagedInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

