// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetListResponseBodyConfigSetsIpPool extends $dara.Model {
  /**
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
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
   * @example
   * xxx
   */
  description?: string;
  fromAddresses?: string[];
  /**
   * @example
   * xxx
   */
  id?: string;
  ipPool?: ConfigSetListResponseBodyConfigSetsIpPool;
  /**
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
  configSets?: ConfigSetListResponseBodyConfigSets[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
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

