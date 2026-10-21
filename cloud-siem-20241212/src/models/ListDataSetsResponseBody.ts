// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsResponseBodyDataSetsDataSetReferences extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * dataset-nhcrmjpx1zsorlaq****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The ID of the rule or playbook associated with the dataset.
   * 
   * @example
   * 456232
   */
  dataSetReferenceId?: string;
  /**
   * @remarks
   * The name of the rule or playbook associated with the dataset.
   * 
   * @example
   * playbook_name
   */
  dataSetReferenceName?: string;
  /**
   * @remarks
   * The type of service associated with the dataset. Valid values:
   * - custom_rule: custom rule.
   * - playbook: playbook.
   * 
   * @example
   * playbook
   */
  dataSetReferenceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetReferenceId: 'DataSetReferenceId',
      dataSetReferenceName: 'DataSetReferenceName',
      dataSetReferenceType: 'DataSetReferenceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'string',
      dataSetReferenceId: 'string',
      dataSetReferenceName: 'string',
      dataSetReferenceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetsResponseBodyDataSetsIpWhitelistRecognizers extends $dara.Model {
  /**
   * @remarks
   * The automatic recognition status. Valid values:
   * - enabled: enabled.
   * - disabled: disabled.
   * 
   * @example
   * enabled
   */
  autoRecognizeStatus?: string;
  /**
   * @remarks
   * The IP type identified by the recognizer. Valid values:
   * - sas_vulnerability_scanner_ip: IP addresses of the Security Center vulnerability web scanner.
   * - waf_back_source_ip: back-to-origin IP addresses of Web Application Firewall (WAF).
   * - ddos_back_source_ip: back-to-origin IP addresses of Anti-DDoS.
   * - esa_back_source_ip: back-to-origin node IP addresses of Edge Security Acceleration (ESA).
   * - ecs_public_ip: public IP addresses of Elastic Compute Service (ECS) instances.
   * - slb_public_ip: public IP addresses of Server Load Balancer (SLB) instances.
   * - vpc_eip: elastic IP addresses (EIPs).
   * - cdn_back_source_ip: back-to-origin IP addresses of Content Delivery Network (CDN).
   * - ga_back_source_ip: back-to-origin IP addresses of Global Accelerator (GA).
   * 
   * @example
   * waf_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @remarks
   * The recognition scope. Valid values:
   * - current_account: current account only.
   * - rd_accounts: multi-account enabled.
   * 
   * @example
   * current_account
   */
  recognizeScope?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1713787368000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRecognizeStatus: 'AutoRecognizeStatus',
      ipWhitelistRecognizerType: 'IpWhitelistRecognizerType',
      recognizeScope: 'RecognizeScope',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecognizeStatus: 'string',
      ipWhitelistRecognizerType: 'string',
      recognizeScope: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetsResponseBodyDataSets extends $dara.Model {
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1713787368000
   */
  createTime?: number;
  /**
   * @remarks
   * The dataset description.
   * 
   * @example
   * lmftest desc
   */
  dataSetDescription?: string;
  /**
   * @remarks
   * The unique key name of the dataset.
   * 
   * @example
   * ip
   */
  dataSetFieldKeyName?: string;
  /**
   * @remarks
   * The field names of the dataset.
   * 
   * @example
   * ["ip","region"]
   */
  dataSetFieldNames?: string;
  /**
   * @remarks
   * The name of the uploaded dataset file.
   * 
   * @example
   * cloudsiem-dataset/1358117679873357_174338773****.csv
   */
  dataSetFileName?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * dataset-t8ha6p7k61rmniqw****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * lmftest
   */
  dataSetName?: string;
  /**
   * @remarks
   * The dataset reference data.
   */
  dataSetReferences?: ListDataSetsResponseBodyDataSetsDataSetReferences[];
  /**
   * @remarks
   * The dataset status. Valid values:
   * - 0: deleted.
   * - 1: enabled.
   * 
   * @example
   * 1
   */
  dataSetStatus?: number;
  /**
   * @remarks
   * The dataset type. Valid values:
   * - custom: custom dataset.
   * - preset: predefined dataset.
   * 
   * @example
   * preset
   */
  dataSetType?: string;
  /**
   * @remarks
   * The list of recognizers.
   */
  ipWhitelistRecognizers?: ListDataSetsResponseBodyDataSetsIpWhitelistRecognizers[];
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1713787368000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSetDescription: 'DataSetDescription',
      dataSetFieldKeyName: 'DataSetFieldKeyName',
      dataSetFieldNames: 'DataSetFieldNames',
      dataSetFileName: 'DataSetFileName',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      dataSetReferences: 'DataSetReferences',
      dataSetStatus: 'DataSetStatus',
      dataSetType: 'DataSetType',
      ipWhitelistRecognizers: 'IpWhitelistRecognizers',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSetDescription: 'string',
      dataSetFieldKeyName: 'string',
      dataSetFieldNames: 'string',
      dataSetFileName: 'string',
      dataSetId: 'string',
      dataSetName: 'string',
      dataSetReferences: { 'type': 'array', 'itemType': ListDataSetsResponseBodyDataSetsDataSetReferences },
      dataSetStatus: 'number',
      dataSetType: 'string',
      ipWhitelistRecognizers: { 'type': 'array', 'itemType': ListDataSetsResponseBodyDataSetsIpWhitelistRecognizers },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSetReferences)) {
      $dara.Model.validateArray(this.dataSetReferences);
    }
    if(Array.isArray(this.ipWhitelistRecognizers)) {
      $dara.Model.validateArray(this.ipWhitelistRecognizers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of datasets.
   */
  dataSets?: ListDataSetsResponseBodyDataSets[];
  /**
   * @remarks
   * The maximum number of results to return when you use the NextToken-based pagination method. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * 157CFBB5-B56F-566F-8991-B3C51799****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSets: 'DataSets',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSets: { 'type': 'array', 'itemType': ListDataSetsResponseBodyDataSets },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSets)) {
      $dara.Model.validateArray(this.dataSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

