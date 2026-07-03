// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSetRequestIpWhitelistRecognizers extends $dara.Model {
  /**
   * @remarks
   * The automatic detection status. Valid values:
   * 
   * - enabled: enabled.
   * 
   * - disabled: disabled.
   * 
   * @example
   * enabled
   */
  autoRecognizeStatus?: string;
  /**
   * @remarks
   * The type of IP address that the recognizer detects. Valid values:
   * 
   * - sas_vulnerability_scanner_ip: The IP address of the Security Center web vulnerability scanner.
   * 
   * - waf_back_source_ip: The back-to-origin IP address of Web Application Firewall (WAF).
   * 
   * - ddos_back_source_ip: The back-to-origin IP address of Anti-DDoS.
   * 
   * - esa_back_source_ip: The back-to-origin IP address of an Edge Security Acceleration (ESA) node.
   * 
   * - ecs_public_ip: The public IP address of an Elastic Compute Service (ECS) instance.
   * 
   * - slb_public_ip: The public IP address of a Server Load Balancer (SLB) instance.
   * 
   * - vpc_eip: An Elastic IP Address (EIP).
   * 
   * - cdn_back_source_ip: The back-to-origin IP address of a content delivery network (CDN).
   * 
   * - ga_back_source_ip: The back-to-origin IP address of Global Accelerator (GA).
   * 
   * @example
   * waf_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @remarks
   * The detection scope. Valid values:
   * 
   * - current_account: the current account only.
   * 
   * - rd_accounts: all accounts in your resource directory.
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
   * The name of the unique key for the dataset.
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
   * 
   * - 0: deleted.
   * 
   * - 1: enabled.
   * 
   * @example
   * 1
   */
  dataSetStatus?: number;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * - custom: custom.
   * 
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
   * The region of the Data Management center for threat analysis. Select a region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose permissions are used to perform the operation. This parameter is used when an administrator acts on behalf of a member.
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

