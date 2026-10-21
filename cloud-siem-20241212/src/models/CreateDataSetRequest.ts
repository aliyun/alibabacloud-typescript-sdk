// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSetRequestIpWhitelistRecognizers extends $dara.Model {
  /**
   * @remarks
   * The automatic recognition status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  autoRecognizeStatus?: string;
  /**
   * @remarks
   * The IP address type identified by the recognizer. Valid values:
   * - sas_vulnerability_scanner_ip: IP addresses of the Security Center vulnerability web scanner.
   * - waf_back_source_ip: back-to-origin IP addresses of Web Application Firewall (WAF).
   * - ddos_back_source_ip: back-to-origin IP addresses of Anti-DDoS.
   * - esa_back_source_ip: back-to-origin node IP addresses of Edge secure acceleration (ESA).
   * - ecs_public_ip: public IP addresses of Elastic Compute Service (ECS) instances.
   * - slb_public_ip: public IP addresses of Server Load Balancer (SLB) instances.
   * - vpc_eip: elastic IP addresses (EIPs).
   * - cdn_back_source_ip: back-to-origin IP addresses of content delivery network (CDN).
   * - ga_back_source_ip: back-to-origin IP addresses of Global Accelerator (GA).
   * 
   * @example
   * waf_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @remarks
   * The recognition scope. Valid values:
   * - current_account: the current account only.
   * - rd_accounts: multi-account mode enabled.
   * 
   * @example
   * current_account
   */
  recognizeScope?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecognizeStatus: 'AutoRecognizeStatus',
      ipWhitelistRecognizerType: 'IpWhitelistRecognizerType',
      recognizeScope: 'RecognizeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecognizeStatus: 'string',
      ipWhitelistRecognizerType: 'string',
      recognizeScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * lmftest contains ip list
   */
  dataSetDescription?: string;
  /**
   * @remarks
   * The unique key name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  dataSetFieldKeyName?: string;
  /**
   * @remarks
   * The name of the uploaded dataset file.
   * 
   * This parameter is required.
   * 
   * @example
   * cloudsiem-dataset/1358117679873357_17433*****.csv
   */
  dataSetFileName?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @remarks
   * The status of the dataset. Valid values:
   * - 0: Deleted.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  dataSetStatus?: number;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * - custom: custom.
   * - preset: predefined.
   * 
   * @example
   * custom
   */
  dataSetType?: string;
  /**
   * @remarks
   * The list of recognizers.
   */
  ipWhitelistRecognizers?: CreateDataSetRequestIpWhitelistRecognizers[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required. If you do not specify this parameter, the API returns a 400 error: "The specified Lang can not be empty."
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetDescription: 'DataSetDescription',
      dataSetFieldKeyName: 'DataSetFieldKeyName',
      dataSetFileName: 'DataSetFileName',
      dataSetName: 'DataSetName',
      dataSetStatus: 'DataSetStatus',
      dataSetType: 'DataSetType',
      ipWhitelistRecognizers: 'IpWhitelistRecognizers',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetDescription: 'string',
      dataSetFieldKeyName: 'string',
      dataSetFileName: 'string',
      dataSetName: 'string',
      dataSetStatus: 'number',
      dataSetType: 'string',
      ipWhitelistRecognizers: { 'type': 'array', 'itemType': CreateDataSetRequestIpWhitelistRecognizers },
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelistRecognizers)) {
      $dara.Model.validateArray(this.ipWhitelistRecognizers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

