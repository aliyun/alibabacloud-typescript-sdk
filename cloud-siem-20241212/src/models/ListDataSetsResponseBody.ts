// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsResponseBodyDataSetsDataSetReferences extends $dara.Model {
  /**
   * @example
   * dataset-nhcrmjpx1zsorlaq****
   */
  dataSetId?: string;
  /**
   * @example
   * 456232
   */
  dataSetReferenceId?: string;
  /**
   * @example
   * playbook_name
   */
  dataSetReferenceName?: string;
  /**
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
   * @example
   * enabled
   */
  autoRecognizeStatus?: string;
  /**
   * @example
   * waf_back_source_ip
   */
  ipWhitelistRecognizerType?: string;
  /**
   * @example
   * current_account
   */
  recognizeScope?: string;
  /**
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
   * @example
   * 1713787368000
   */
  createTime?: number;
  /**
   * @example
   * lmftest desc
   */
  dataSetDescription?: string;
  /**
   * @example
   * ip
   */
  dataSetFieldKeyName?: string;
  /**
   * @example
   * ["ip","region"]
   */
  dataSetFieldNames?: string;
  /**
   * @example
   * cloudsiem-dataset/1358117679873357_174338773****.csv
   */
  dataSetFileName?: string;
  /**
   * @example
   * dataset-t8ha6p7k61rmniqw****
   */
  dataSetId?: string;
  /**
   * @example
   * lmftest
   */
  dataSetName?: string;
  dataSetReferences?: ListDataSetsResponseBodyDataSetsDataSetReferences[];
  /**
   * @example
   * 1
   */
  dataSetStatus?: number;
  /**
   * @example
   * preset
   */
  dataSetType?: string;
  ipWhitelistRecognizers?: ListDataSetsResponseBodyDataSetsIpWhitelistRecognizers[];
  /**
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
  dataSets?: ListDataSetsResponseBodyDataSets[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 157CFBB5-B56F-566F-8991-B3C51799****
   */
  requestId?: string;
  /**
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

