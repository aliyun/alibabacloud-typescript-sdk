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
   * The Chinese name of the delivery type.
   * 
   * @example
   * internet-traffic-log
   */
  dispatchName?: string;
  /**
   * @remarks
   * The key for classified logs. Valid values:
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
   * The switch status of the delivery type.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The detailed delivery configurations for the Internet and VPC.
   */
  filterKeys?: string[];
  /**
   * @remarks
   * The value is fixed as log_type and can be ignored.
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
   * The log delivery configuration details.
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
   * The site. A value of cn represents the Chinese mainland, intl represents regions outside the Chinese mainland, and global represents global.
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
   * The delivery configuration status.
   * 
   * @example
   * success_finished
   */
  configStatus?: string;
  /**
   * @remarks
   * The delivery name.
   * 
   * @example
   * internet-traffic-log
   */
  dispatchName?: string;
  /**
   * @remarks
   * The value of the delivery log.
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
   * The detailed information list of Logstores.
   */
  infoList?: DescribeBatchSlsDispatchStatusResponseBodyInfoList[];
  /**
   * @remarks
   * The list of log services.
   */
  itemList?: DescribeBatchSlsDispatchStatusResponseBodyItemList[];
  /**
   * @remarks
   * The log version. A value of 1 indicates only one Logstore, and a value of 2 indicates two Logstores.
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
   * The request ID of the returned result.
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

