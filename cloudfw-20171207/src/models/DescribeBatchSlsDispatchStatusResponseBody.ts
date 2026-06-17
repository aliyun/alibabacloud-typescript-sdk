// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchSlsDispatchStatusResponseBodyInfoListItemList extends $dara.Model {
  /**
   * @remarks
   * The configuration status.
   * 
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @remarks
   * The name of the delivery type.
   * 
   * @example
   * internet-traffic-log
   */
  dispatchName?: string;
  /**
   * @remarks
   * The key for the log categorization. Valid values:
   * 
   * **internet_log**
   * 
   * **vpc_firewall_log**
   * 
   * **nat_firewall_log**
   * 
   * **ipv6_firewall_log**
   * 
   * **dns_firewall_log**
   * 
   * @example
   * ipv6_firewall_log
   */
  dispatchValue?: string;
  /**
   * @remarks
   * Indicates whether this delivery type is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The detailed delivery configurations for the Internet and VPCs.
   */
  filterKeys?: string[];
  /**
   * @remarks
   * The value is fixed to log_type. You can ignore this parameter.
   * 
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
  /**
   * @remarks
   * The details of the log delivery configuration.
   */
  itemList?: DescribeBatchSlsDispatchStatusResponseBodyInfoListItemList[];
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * cloudfirewall-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * @example
   * cloudfirewall-project-1204872307283650-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * \\`cn\\` indicates the Chinese mainland. \\`intl\\` indicates regions outside the Chinese mainland. \\`global\\` indicates global.
   * 
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
   * @remarks
   * The status of the delivery configuration.
   * 
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @remarks
   * The name of the log delivery.
   * 
   * @example
   * internet-traffic-log
   */
  dispatchName?: string;
  /**
   * @remarks
   * The value of the log to be delivered.
   * 
   * @example
   * internet_log
   */
  dispatchValue?: string;
  /**
   * @remarks
   * The delivery status.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The supported filter conditions.
   */
  filterKeys?: string[];
  /**
   * @remarks
   * The name of the search type.
   * 
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
  /**
   * @remarks
   * A list of detailed information about the Logstores.
   */
  infoList?: DescribeBatchSlsDispatchStatusResponseBodyInfoList[];
  /**
   * @remarks
   * A list of Simple Log Service projects.
   */
  itemList?: DescribeBatchSlsDispatchStatusResponseBodyItemList[];
  /**
   * @remarks
   * The log version. A value of 1 indicates that there is one Logstore. A value of 2 indicates that there are two Logstores.
   * 
   * @example
   * 1
   */
  logVersion?: string;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * rs-stats
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * @example
   * cloudfirewallnew-project-199053910542****-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
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

