// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class ListClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster IDs. Number of elements in the array: 1 to 100.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  clusterIds?: string[];
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The states of the clusters. Number of elements in the array: 1 to 100.
   * 
   * @example
   * ["HADOOP"]
   */
  clusterStates?: string[];
  /**
   * @remarks
   * The list of cluster types. Number of elements in the array: 1 to 100.
   * 
   * @example
   * ["c-b933c5aac8fe****"]
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The starting point of the current query. If you do not configure this parameter, the query starts from the beginning.
   * 
   * @example
   * eyJlY21OZXh0VG9rZW4iOiIxIiwidGFpaGFvTmV4dFRva2VuIjoiNTYiLCJ0YWloYW9OZXh0VG9rZW5JbnQiOjU2LCJlY21OZXh0VG9rZW5JbnQiOjF9
   */
  nextToken?: string;
  /**
   * @remarks
   * The billing methods. You can specify a maximum of 2 items.
   * 
   * @example
   * ["ECS"]
   */
  paymentTypes?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list. Number of elements in the array: 1 to 20.
   * 
   * @example
   * ["PayAsYouGo"]
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      clusterName: 'ClusterName',
      clusterStates: 'ClusterStates',
      clusterTypes: 'ClusterTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      paymentTypes: 'PaymentTypes',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      clusterName: 'string',
      clusterStates: { 'type': 'array', 'itemType': 'string' },
      clusterTypes: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      paymentTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.clusterIds)) {
      $dara.Model.validateArray(this.clusterIds);
    }
    if(Array.isArray(this.clusterStates)) {
      $dara.Model.validateArray(this.clusterStates);
    }
    if(Array.isArray(this.clusterTypes)) {
      $dara.Model.validateArray(this.clusterTypes);
    }
    if(Array.isArray(this.paymentTypes)) {
      $dara.Model.validateArray(this.paymentTypes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

