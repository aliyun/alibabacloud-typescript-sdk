// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetListResponseBodyConfigSetsIpPool extends $dara.Model {
  /**
   * @remarks
   * The associated IP pool ID.
   * 
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
   * @remarks
   * The associated IP pool name.
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
   * The list of from addresses associated with the ConfigSet.
   */
  fromAddresses?: string[];
  /**
   * @remarks
   * The ConfigSet ID.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The IP pool associated with the ConfigSet.
   */
  ipPool?: ConfigSetListResponseBodyConfigSetsIpPool;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The ConfigSet name.
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
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fromAddresses: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      ipPool: ConfigSetListResponseBodyConfigSetsIpPool,
      isPublicChannelBackoff: 'boolean',
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
   * The list of ConfigSets.
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
   * Indicates whether more results are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The page size.
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
   * The total number of matching entries.
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

