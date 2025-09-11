// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesRequestTags extends $dara.Model {
  /**
   * @example
   * key-1
   */
  key?: string;
  /**
   * @example
   * value-1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeARMServerInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The container specifications.
   */
  AICSpecs?: string[];
  /**
   * @remarks
   * Spcifies whether the result contains the container information. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  describeAICInstances?: boolean;
  /**
   * @remarks
   * The IDs of the Edge Node Service (ENS) nodes.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2006-01-03
   */
  maxDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2006-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * Server-Name
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The sorting order of the results to return. Valid values: ServerIdSort, ServerNameSort, ExpireTimeSort, CreationTimeSort, and EnsRegionIdSort.
   * 
   * asc: ascending order. desc: descending order.
   * 
   * @example
   * {"ServerIdSort":"desc","ServerNameSort":"desc","ExpireTimeSort":"asc","CreationTimeSort":"asc","EnsRegionIdSort":"asc"}
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the ARM servers.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The server specifications.
   */
  serverSpecs?: string[];
  /**
   * @remarks
   * The operation statuses.
   */
  states?: string[];
  tags?: DescribeARMServerInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      AICSpecs: 'AICSpecs',
      describeAICInstances: 'DescribeAICInstances',
      ensRegionIds: 'EnsRegionIds',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      name: 'Name',
      namespace: 'Namespace',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serverIds: 'ServerIds',
      serverSpecs: 'ServerSpecs',
      states: 'States',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AICSpecs: { 'type': 'array', 'itemType': 'string' },
      describeAICInstances: 'boolean',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      maxDate: 'string',
      minDate: 'string',
      name: 'string',
      namespace: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      serverSpecs: { 'type': 'array', 'itemType': 'string' },
      states: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': DescribeARMServerInstancesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.AICSpecs)) {
      $dara.Model.validateArray(this.AICSpecs);
    }
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    if(Array.isArray(this.serverIds)) {
      $dara.Model.validateArray(this.serverIds);
    }
    if(Array.isArray(this.serverSpecs)) {
      $dara.Model.validateArray(this.serverSpecs);
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
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

