// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckInstanceResultResponseBodyBasicDataInstanceInfoConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item, which is unique.
   * 
   * @example
   * prot
   */
  name?: string;
  /**
   * @remarks
   * The display name of the configuration item for internationalization.
   * 
   * @example
   * prot
   */
  showName?: string;
  /**
   * @remarks
   * The value of the configuration item specified for the instance.
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
   * The information about the configuration item whose risks are fixed for the instance.
   */
  config?: ListCheckInstanceResultResponseBodyBasicDataInstanceInfoConfig[];
  /**
   * @remarks
   * The time of the first check.
   * 
   * @example
   * 1716447535531
   */
  firstUpdateTime?: number;
  /**
   * @remarks
   * The time of the last check.
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
   * The ID of the check result for the instance.
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
   * The information about the instance on which the check item is used.
   */
  instanceInfo?: ListCheckInstanceResultResponseBodyBasicDataInstanceInfo;
  /**
   * @remarks
   * The instance name of the server.
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
   * The states of check items. Multiple states are separated with commas (,). Valid values:
   * 
   * *   **PASS**: passed
   * *   **NOT_PASS**: failed
   * *   **CHECKING**: being checked
   * *   **NOT_CHECK**: not checked
   * *   **WHITELIST**: added to the whitelist
   * 
   * @example
   * NOT_PASS
   */
  status?: string;
  /**
   * @remarks
   * The exception message of the check item.
   * 
   * @example
   * Task is failed.
   */
  statusMessage?: string;
  /**
   * @remarks
   * The multi-cloud provider account name.
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
   * The search condition.
   * 
   * @example
   * RegionIdShow
   */
  key?: string;
  /**
   * @remarks
   * The display name of the search condition.
   * 
   * @example
   * Region
   */
  showName?: string;
  /**
   * @remarks
   * The format of the check result for the instance. Valid values:
   * 
   * *   **text**
   * *   **link**
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
   * The metadata information about the details of the instance.
   */
  grids?: ListCheckInstanceResultResponseBodyColumnsGrids[];
  /**
   * @remarks
   * The search condition.
   * 
   * @example
   * RegionIdShow
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the search condition is used. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  search?: boolean;
  /**
   * @remarks
   * The search key.
   * 
   * @example
   * InstanceIdKey
   */
  searchKey?: string;
  /**
   * @remarks
   * The display name of the search condition.
   * 
   * @example
   * Region
   */
  showName?: string;
  /**
   * @remarks
   * The type of the check result for the instance. Valid values:
   * 
   * *   **text**
   * *   **link**
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The basic information about the affected instances.
   */
  basicData?: ListCheckInstanceResultResponseBodyBasicData[];
  /**
   * @remarks
   * The extended information about the instances.
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
   * The metadata information about the search conditions that can be used to filter instances.
   */
  columns?: ListCheckInstanceResultResponseBodyColumns[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCheckInstanceResultResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

