// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsResponseBodyDataSetsDataSetReferences extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * dataset-nhcrmjpx1zsorlaq****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The ID of the rule or playbook that is associated with the dataset.
   * 
   * @example
   * 456232
   */
  dataSetReferenceId?: string;
  /**
   * @remarks
   * The name of the rule or playbook that is associated with the dataset.
   * 
   * @example
   * playbook_name
   */
  dataSetReferenceName?: string;
  /**
   * @remarks
   * The type of the service that is associated with the dataset. Valid values:
   * 
   * - custom_rule: custom rule.
   * 
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
   * The status of automatic detection. Valid values:
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
   * - sas_vulnerability_scanner_ip: Security Center web vulnerability scanner IP address.
   * 
   * - waf_back_source_ip: Web Application Firewall back-to-origin IP address.
   * 
   * - ddos_back_source_ip: Anti-DDoS back-to-origin IP address.
   * 
   * - esa_back_source_ip: Edge Security Acceleration (ESA) back-to-origin node IP address.
   * 
   * - ecs_public_ip: Elastic Compute Service (ECS) public IP address.
   * 
   * - slb_public_ip: Server Load Balancer (SLB) public IP address.
   * 
   * - vpc_eip: Elastic IP Address (EIP).
   * 
   * - cdn_back_source_ip: Alibaba Cloud CDN back-to-origin IP address.
   * 
   * - ga_back_source_ip: Global Accelerator (GA) back-to-origin IP address.
   * 
   * @example
   * waf_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @remarks
   * The detection scope. Valid values:
   * 
   * - current_account: current account only.
   * 
   * - rd_accounts: multiple accounts.
   * 
   * @example
   * current_account
   */
  recognizeScope?: string;
  /**
   * @remarks
   * The time when the dataset was updated.
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
   * The time when the dataset was created.
   * 
   * @example
   * 1713787368000
   */
  createTime?: number;
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
   * The name of the unique key for the dataset.
   * 
   * @example
   * ip
   */
  dataSetFieldKeyName?: string;
  /**
   * @remarks
   * The names of the fields in the dataset.
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
   * The ID of the dataset.
   * 
   * @example
   * dataset-t8ha6p7k61rmniqw****
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
   * The dataset references.
   */
  dataSetReferences?: ListDataSetsResponseBodyDataSetsDataSetReferences[];
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
   * The time when the dataset was updated.
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
   * The maximum number of results to return for the request. This parameter is used for queries that use NextToken. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
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
   * The total number of entries.
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

