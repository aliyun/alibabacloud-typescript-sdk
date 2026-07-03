// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSetRequestIpWhitelistRecognizers extends $dara.Model {
  /**
   * @remarks
   * The automatic detection status. Valid values:
   * 
   * - enabled: Enabled.
   * 
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  autoRecognizeStatus?: string;
  /**
   * @remarks
   * The IP address type that the recognizer can detect. Valid values:
   * 
   * - sas_vulnerability_scanner_ip: The IP addresses of the Security Center web vulnerability scanner.
   * 
   * - waf_back_source_ip: The back-to-origin IP addresses of Web Application Firewall (WAF).
   * 
   * - ddos_back_source_ip: The back-to-origin IP addresses of Anti-DDoS.
   * 
   * - esa_back_source_ip: The back-to-origin IP addresses of Edge Security Acceleration (ESA) nodes.
   * 
   * - ecs_public_ip: The public IP addresses of Elastic Compute Service (ECS) instances.
   * 
   * - slb_public_ip: The public IP addresses of Server Load Balancer (SLB).
   * 
   * - vpc_eip: The elastic IP addresses (EIPs).
   * 
   * - cdn_back_source_ip: The back-to-origin IP addresses of Alibaba Cloud CDN.
   * 
   * - ga_back_source_ip: The back-to-origin IP addresses of Global Accelerator (GA).
   * 
   * @example
   * cdn_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @remarks
   * The detection scope. Valid values:
   * 
   * - current_account: The current account only.
   * 
   * - rd_accounts: Multiple accounts are enabled.
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

export class UpdateDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * lmftest desc
   */
  dataSetDescription?: string;
  /**
   * @remarks
   * The name of the uploaded dataset file.
   * 
   * @example
   * cloudsiem-dataset/1358117679873357_1743387731614.csv
   */
  dataSetFileName?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * dataset-10iy8mbifnb4gniv****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @remarks
   * The status of the dataset. Valid values:
   * 
   * - 0: Delete.
   * 
   * - 1: Enable.
   * 
   * @example
   * 1
   */
  dataSetStatus?: number;
  /**
   * @remarks
   * The IP address types that the recognizer can detect.
   */
  ipWhitelistRecognizers?: UpdateDataSetRequestIpWhitelistRecognizers[];
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to switch to the member\\"s view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetDescription: 'DataSetDescription',
      dataSetFileName: 'DataSetFileName',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      dataSetStatus: 'DataSetStatus',
      ipWhitelistRecognizers: 'IpWhitelistRecognizers',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetDescription: 'string',
      dataSetFileName: 'string',
      dataSetId: 'string',
      dataSetName: 'string',
      dataSetStatus: 'number',
      ipWhitelistRecognizers: { 'type': 'array', 'itemType': UpdateDataSetRequestIpWhitelistRecognizers },
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

