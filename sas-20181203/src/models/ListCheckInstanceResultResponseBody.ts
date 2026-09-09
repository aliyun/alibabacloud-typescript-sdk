// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckInstanceResultResponseBodyBasicDataInstanceInfoConfig extends $dara.Model {
  /**
   * @remarks
   * The unique name of the corresponding configuration.
   * 
   * @example
   * prot
   */
  name?: string;
  /**
   * @remarks
   * The internationalized name of the corresponding configuration item.
   * 
   * @example
   * prot
   */
  showName?: string;
  /**
   * @remarks
   * The value of the corresponding configuration for the current asset.
   * 
   * @example
   * 8080
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      showName: 'ShowName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      showName: 'string',
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

export class ListCheckInstanceResultResponseBodyBasicDataInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The current instance information displayed for the corresponding remediation configuration.
   */
  config?: ListCheckInstanceResultResponseBodyBasicDataInstanceInfoConfig[];
  /**
   * @remarks
   * The time of the first check. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1716447535531
   */
  firstUpdateTime?: number;
  /**
   * @remarks
   * The time of the latest check. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1716447535531
   */
  lastUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      firstUpdateTime: 'FirstUpdateTime',
      lastUpdateTime: 'LastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListCheckInstanceResultResponseBodyBasicDataInstanceInfoConfig },
      firstUpdateTime: 'number',
      lastUpdateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckInstanceResultResponseBodyBasicData extends $dara.Model {
  /**
   * @remarks
   * The check result ID of the instance.
   * 
   * @example
   * 300054
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * rm-m5es7ch1s62i4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance information displayed for the corresponding check item.
   */
  instanceInfo?: ListCheckInstanceResultResponseBodyBasicDataInstanceInfo;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * sg-t4nbk2aodzio52xv****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The status list of the check item. Multiple statuses are separated by commas (,). Valid values:
   * 
   * - **PASS**: Passed.
   * - **NOT_PASS**: Failed.
   * - **CHECKING**: Being checked.
   * - **NOT_CHECK**: Not checked.
   * - **WHITELIST**: Whitelisted.
   * - **FAILED**: Failed.
   * 
   * @example
   * NOT_PASS
   */
  status?: string;
  /**
   * @remarks
   * The exception status message of the check item.
   * 
   * @example
   * Check task failed
   */
  statusMessage?: string;
  /**
   * @remarks
   * The multi-cloud vendor account name.
   * 
   * @example
   * test
   */
  vendorUserName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      instanceInfo: 'InstanceInfo',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      vendorUserName: 'VendorUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
      instanceInfo: ListCheckInstanceResultResponseBodyBasicDataInstanceInfo,
      instanceName: 'string',
      regionId: 'string',
      status: 'string',
      statusMessage: 'string',
      vendorUserName: 'string',
    };
  }

  validate() {
    if(this.instanceInfo && typeof (this.instanceInfo as any).validate === 'function') {
      (this.instanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckInstanceResultResponseBodyColumnsGrids extends $dara.Model {
  /**
   * @remarks
   * The search value.
   * 
   * @example
   * RegionIdShow
   */
  key?: string;
  /**
   * @remarks
   * The search display name.
   * 
   * @example
   * Region
   */
  showName?: string;
  /**
   * @remarks
   * The type of the check instance result. Valid values:
   * 
   * - **text**: text
   * - **link**: link
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckInstanceResultResponseBodyColumns extends $dara.Model {
  /**
   * @remarks
   * The list of list-type metadata.
   */
  grids?: ListCheckInstanceResultResponseBodyColumnsGrids[];
  /**
   * @remarks
   * The key of the list property.
   * 
   * @example
   * RegionIdShow
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether search is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  search?: boolean;
  /**
   * @remarks
   * The key used for search.
   * 
   * @example
   * InstanceIdKey
   */
  searchKey?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Region
   */
  showName?: string;
  /**
   * @remarks
   * The property type of the check instance result. Valid values:
   * 
   * - **text**: text
   * - **link**: link
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grids: 'Grids',
      key: 'Key',
      search: 'Search',
      searchKey: 'SearchKey',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grids: { 'type': 'array', 'itemType': ListCheckInstanceResultResponseBodyColumnsGrids },
      key: 'string',
      search: 'boolean',
      searchKey: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grids)) {
      $dara.Model.validateArray(this.grids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckInstanceResultResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckInstanceResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of basic information about affected instances.
   */
  basicData?: ListCheckInstanceResultResponseBodyBasicData[];
  /**
   * @remarks
   * The list of extended information about affected instances.
   * 
   * @example
   * [{
   * 	"SecurityGroupNameShow": {
   * 		"value": "Sas_Malicious_Ip_Security_Group"
   * 	},
   * 	"InstanceIdShow": {
   * 		"link": "https://ecs.console.aliyun.com/#/securityGroupDetail/region/ap-southeast-1/groupId/sg-t4nbk2aodzio52xvj00s/rule/intranetIngress",
   * 		"value": "sg-t4nbk2aodzio52xv****"
   * 	}
   * }]
   */
  checks?: { [key: string]: any }[];
  /**
   * @remarks
   * The metadata of the affected instance information display list.
   */
  columns?: ListCheckInstanceResultResponseBodyColumns[];
  /**
   * @remarks
   * The paging information displayed on the page in a paged query.
   */
  pageInfo?: ListCheckInstanceResultResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * 3AB18264-8A1B-52A6-A9AF-A886556E0F2E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      basicData: 'BasicData',
      checks: 'Checks',
      columns: 'Columns',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicData: { 'type': 'array', 'itemType': ListCheckInstanceResultResponseBodyBasicData },
      checks: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      columns: { 'type': 'array', 'itemType': ListCheckInstanceResultResponseBodyColumns },
      pageInfo: ListCheckInstanceResultResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.basicData)) {
      $dara.Model.validateArray(this.basicData);
    }
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

