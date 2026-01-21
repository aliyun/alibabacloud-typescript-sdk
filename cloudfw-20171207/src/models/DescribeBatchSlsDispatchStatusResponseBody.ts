// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchSlsDispatchStatusResponseBodyInfoListItemList extends $dara.Model {
  /**
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @example
   * 互联网流量日志、VPC流量日志、NAT流量日志
   */
  dispatchName?: string;
  /**
   * @example
   * ipv6_firewall_log
   */
  dispatchValue?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  filterKeys?: string[];
  /**
   * @example
   * log_type
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      configStatus: 'ConfigStatus',
      dispatchName: 'DispatchName',
      dispatchValue: 'DispatchValue',
      enable: 'Enable',
      filterKeys: 'FilterKeys',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatus: 'string',
      dispatchName: 'string',
      dispatchValue: 'string',
      enable: 'boolean',
      filterKeys: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterKeys)) {
      $dara.Model.validateArray(this.filterKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBodyInfoList extends $dara.Model {
  itemList?: DescribeBatchSlsDispatchStatusResponseBodyInfoListItemList[];
  /**
   * @example
   * cloudfirewall-logstore
   */
  logstoreName?: string;
  /**
   * @example
   * cloudfirewall-project-1204872307283650-cn-hangzhou
   */
  projectName?: string;
  /**
   * @example
   * cn
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseBodyInfoListItemList },
      logstoreName: 'string',
      projectName: 'string',
      site: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBodyItemList extends $dara.Model {
  /**
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @example
   * 互联网流量日志、VPC流量日志、NAT流量日志
   */
  dispatchName?: string;
  /**
   * @example
   * internet_log
   */
  dispatchValue?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  filterKeys?: string[];
  /**
   * @example
   * log_type
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      configStatus: 'ConfigStatus',
      dispatchName: 'DispatchName',
      dispatchValue: 'DispatchValue',
      enable: 'Enable',
      filterKeys: 'FilterKeys',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatus: 'string',
      dispatchName: 'string',
      dispatchValue: 'string',
      enable: 'boolean',
      filterKeys: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterKeys)) {
      $dara.Model.validateArray(this.filterKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBody extends $dara.Model {
  infoList?: DescribeBatchSlsDispatchStatusResponseBodyInfoList[];
  itemList?: DescribeBatchSlsDispatchStatusResponseBodyItemList[];
  /**
   * @example
   * 1
   */
  logVersion?: string;
  /**
   * @example
   * rs-stats
   */
  logstoreName?: string;
  /**
   * @example
   * cloudfirewallnew-project-199053910542****-cn-hangzhou
   */
  projectName?: string;
  /**
   * @example
   * 7036EBAB-F85F-5AAE-976F-C75AEE59****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      infoList: 'InfoList',
      itemList: 'ItemList',
      logVersion: 'LogVersion',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseBodyInfoList },
      itemList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseBodyItemList },
      logVersion: 'string',
      logstoreName: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.infoList)) {
      $dara.Model.validateArray(this.infoList);
    }
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

