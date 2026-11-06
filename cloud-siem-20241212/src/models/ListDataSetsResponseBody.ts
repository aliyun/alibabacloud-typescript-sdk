// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSetsResponseBodyDataSetsDataSetReferences extends $dara.Model {
  dataSetId?: string;
  dataSetReferenceId?: string;
  dataSetReferenceName?: string;
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
  autoRecognizeStatus?: string;
  ipWhitelistRecognizerType?: string;
  recognizeScope?: string;
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
  createTime?: number;
  dataSetDescription?: string;
  dataSetFieldKeyName?: string;
  dataSetFieldNames?: string;
  dataSetFileName?: string;
  dataSetId?: string;
  dataSetName?: string;
  dataSetReferences?: ListDataSetsResponseBodyDataSetsDataSetReferences[];
  dataSetStatus?: number;
  dataSetType?: string;
  ipWhitelistRecognizers?: ListDataSetsResponseBodyDataSetsIpWhitelistRecognizers[];
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
  maxResults?: number;
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

