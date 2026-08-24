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

export class ConfigSetListResponseBodyConfigSetsValidationOption extends $dara.Model {
  enabled?: boolean;
  forbiddenStatusList?: string[];
  forbiddenSubStatusList?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      forbiddenStatusList: 'ForbiddenStatusList',
      forbiddenSubStatusList: 'ForbiddenSubStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      forbiddenStatusList: { 'type': 'array', 'itemType': 'string' },
      forbiddenSubStatusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenStatusList)) {
      $dara.Model.validateArray(this.forbiddenStatusList);
    }
    if(Array.isArray(this.forbiddenSubStatusList)) {
      $dara.Model.validateArray(this.forbiddenSubStatusList);
    }
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
   * The configuration set ID.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The IP pool.
   */
  ipPool?: ConfigSetListResponseBodyConfigSetsIpPool;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The configuration set name.
   * 
   * @example
   * xxx
   */
  name?: string;
  validationOption?: ConfigSetListResponseBodyConfigSetsValidationOption;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fromAddresses: 'FromAddresses',
      id: 'Id',
      ipPool: 'IpPool',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
      validationOption: 'ValidationOption',
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
      validationOption: ConfigSetListResponseBodyConfigSetsValidationOption,
    };
  }

  validate() {
    if(Array.isArray(this.fromAddresses)) {
      $dara.Model.validateArray(this.fromAddresses);
    }
    if(this.ipPool && typeof (this.ipPool as any).validate === 'function') {
      (this.ipPool as any).validate();
    }
    if(this.validationOption && typeof (this.validationOption as any).validate === 'function') {
      (this.validationOption as any).validate();
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
   * Indicates whether there is a next page. Valid values:
   * - true: Yes.
   * - false: No.
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
   * The total number of entries that match the request conditions.
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

