// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetListResponseBodyConfigSetsIpPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated IP pool.
   * 
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
   * @remarks
   * The name of the associated IP pool.
   * 
   * @example
   * xxx
   */
  ipPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      ipPoolId: 'IpPoolId',
      ipPoolName: 'IpPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPoolId: 'string',
      ipPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetListResponseBodyConfigSets extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The list of associated sender addresses.
   */
  fromAddresses?: string[];
  /**
   * @remarks
   * The ID of the configuration set.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The IP pool information.
   */
  ipPool?: ConfigSetListResponseBodyConfigSetsIpPool;
  /**
   * @remarks
   * The name of the configuration set.
   * 
   * @example
   * xxx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fromAddresses: 'FromAddresses',
      id: 'Id',
      ipPool: 'IpPool',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fromAddresses: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      ipPool: ConfigSetListResponseBodyConfigSetsIpPool,
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fromAddresses)) {
      $dara.Model.validateArray(this.fromAddresses);
    }
    if(this.ipPool && typeof (this.ipPool as any).validate === 'function') {
      (this.ipPool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of configuration sets.
   */
  configSets?: ConfigSetListResponseBodyConfigSets[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Indicates whether a next page of results exists.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the request.
   * 
   * @example
   * 5
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      configSets: 'ConfigSets',
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSets: { 'type': 'array', 'itemType': ConfigSetListResponseBodyConfigSets },
      currentPage: 'number',
      hasMore: 'boolean',
      pageSize: 'number',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configSets)) {
      $dara.Model.validateArray(this.configSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

