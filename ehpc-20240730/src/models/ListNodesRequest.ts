// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hostnames of the compute nodes that you want to query.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The IP addresses of the compute nodes that you want to query.
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The queues to which the nodes belong.
   */
  queueNames?: string[];
  /**
   * @remarks
   * Specifies whether the results are sorted in ascending or descending order. Valid values:
   * 
   * *   Forward: ascending
   * *   Backward: descending
   * 
   * Default value: Forward.
   * 
   * @example
   * Forward
   */
  sequence?: string;
  /**
   * @remarks
   * The sorting method of the node list. Valid values:
   * 
   * *   AddedTime: sorts the nodes by the time that they were added.
   * *   HostName: sorts the nodes by their hostnames.
   * 
   * Default value: addedtime.
   * 
   * @example
   * AddedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The states of the compute nodes to be queried.
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostnames: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddress: 'PrivateIpAddress',
      queueNames: 'QueueNames',
      sequence: 'Sequence',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostnames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      queueNames: { 'type': 'array', 'itemType': 'string' },
      sequence: 'string',
      sortBy: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    if(Array.isArray(this.queueNames)) {
      $dara.Model.validateArray(this.queueNames);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

