// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMirrorFiltersRequestTags } from "./ListTrafficMirrorFiltersRequestTags";


export class ListTrafficMirrorFiltersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the mirrored traffic belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about regions that support traffic mirroring, see [Overview of traffic mirroring](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the mirrored traffic belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListTrafficMirrorFiltersRequestTags[];
  /**
   * @remarks
   * The ID of the traffic mirror filter. The maximum value of **N** is **100**, which specifies that you can query up to 100 filters at a time.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterIds?: string[];
  /**
   * @remarks
   * The name of the filter.
   * 
   * @example
   * abc
   */
  trafficMirrorFilterName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      trafficMirrorFilterIds: 'TrafficMirrorFilterIds',
      trafficMirrorFilterName: 'TrafficMirrorFilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersRequestTags },
      trafficMirrorFilterIds: { 'type': 'array', 'itemType': 'string' },
      trafficMirrorFilterName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.trafficMirrorFilterIds)) {
      $dara.Model.validateArray(this.trafficMirrorFilterIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

