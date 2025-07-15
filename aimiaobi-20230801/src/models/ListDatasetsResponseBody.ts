// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyCustomSemanticSearchConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  datasetQuota?: number;
  /**
   * @example
   * 1
   */
  datasetUsedQuota?: number;
  /**
   * @example
   * 1000
   */
  docQuota?: number;
  /**
   * @example
   * 1
   */
  docUsedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      datasetQuota: 'DatasetQuota',
      datasetUsedQuota: 'DatasetUsedQuota',
      docQuota: 'DocQuota',
      docUsedQuota: 'DocUsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetQuota: 'number',
      datasetUsedQuota: 'number',
      docQuota: 'number',
      docUsedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @example
   * 1
   */
  docUsedQuota?: number;
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      docUsedQuota: 'DocUsedQuota',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      docUsedQuota: 'number',
      searchDatasetEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyThirdSearchConfig extends $dara.Model {
  /**
   * @example
   * 2
   */
  datasetQuota?: number;
  /**
   * @example
   * 1
   */
  datasetUsedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      datasetQuota: 'DatasetQuota',
      datasetUsedQuota: 'DatasetUsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetQuota: 'number',
      datasetUsedQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  customSemanticSearchConfig?: ListDatasetsResponseBodyCustomSemanticSearchConfig;
  data?: ListDatasetsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  thirdSearchConfig?: ListDatasetsResponseBodyThirdSearchConfig;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customSemanticSearchConfig: 'CustomSemanticSearchConfig',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      thirdSearchConfig: 'ThirdSearchConfig',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customSemanticSearchConfig: ListDatasetsResponseBodyCustomSemanticSearchConfig,
      data: { 'type': 'array', 'itemType': ListDatasetsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      thirdSearchConfig: ListDatasetsResponseBodyThirdSearchConfig,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.customSemanticSearchConfig && typeof (this.customSemanticSearchConfig as any).validate === 'function') {
      (this.customSemanticSearchConfig as any).validate();
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.thirdSearchConfig && typeof (this.thirdSearchConfig as any).validate === 'function') {
      (this.thirdSearchConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

