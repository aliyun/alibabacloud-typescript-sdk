// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeARMServerInstancesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * The list of container specifications.
   */
  AICSpecs?: string[];
  /**
   * @remarks
   * Specifies whether the query results include container information. Valid values:
   * 
   * - **true**: Included.
   * 
   * - **false**: Not included.
   * 
   * @example
   * true
   */
  describeAICInstances?: boolean;
  /**
   * @remarks
   * The list of ENS edge zone IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The end time of the query. Format: "2006-01-02". By default, no time limit is applied.
   * 
   * @example
   * 2006-01-03
   */
  maxDate?: string;
  /**
   * @remarks
   * The start time of the query. Format: "2006-01-02". By default, no time limit is applied.
   * 
   * @example
   * 2006-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The server name.
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
   * The sorting method for query results. You can sort results by one or more of the following fields: ServerIdSort (server ID), ServerNameSort (server name), ExpireTimeSort (expiration time), CreationTimeSort (creation time), and EnsRegionIdSort (edge zone ID).
   * 
   * Valid values: asc (ascending order) and desc (descending order).
   * 
   * @example
   * {"ServerIdSort":"desc","ServerNameSort":"desc","ExpireTimeSort":"asc"}
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number of the query list. Minimum value: **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of server instance IDs.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The list of server specifications.
   */
  serverSpecs?: string[];
  /**
   * @remarks
   * The list of operation states.
   */
  states?: string[];
  /**
   * @remarks
   * The list of tags.
   */
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

