// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyCustomSemanticSearchConfig extends $dara.Model {
  /**
   * @remarks
   * The dataset quota.
   * 
   * @example
   * 3
   */
  datasetQuota?: number;
  /**
   * @remarks
   * The number of datasets created.
   * 
   * @example
   * 1
   */
  datasetUsedQuota?: number;
  /**
   * @remarks
   * The document quota.
   * 
   * @example
   * 1000
   */
  docQuota?: number;
  /**
   * @remarks
   * The used document quota.
   * 
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

export class ListDatasetsResponseBodyDataAdministrators extends $dara.Model {
  /**
   * @remarks
   * The administrator user ID.
   * 
   * @example
   * xx
   */
  userId?: string;
  /**
   * @remarks
   * The administrator username.
   * 
   * @example
   * xx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      username: 'string',
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
   * @remarks
   * The dataset access level.
   * 
   * @example
   * private
   */
  accessLevel?: string;
  /**
   * @remarks
   * The administrators of the dataset.
   */
  administrators?: ListDatasetsResponseBodyDataAdministrators[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the dataset.
   * 
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @remarks
   * The dataset description.
   * 
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @remarks
   * The number of documents uploaded to the dataset.
   * 
   * @example
   * 1
   */
  docUsedQuota?: number;
  /**
   * @remarks
   * Indicates whether search is enabled for the dataset.
   * 
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'AccessLevel',
      administrators: 'Administrators',
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
      accessLevel: 'string',
      administrators: { 'type': 'array', 'itemType': ListDatasetsResponseBodyDataAdministrators },
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
    if(Array.isArray(this.administrators)) {
      $dara.Model.validateArray(this.administrators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyThirdSearchConfig extends $dara.Model {
  /**
   * @remarks
   * The dataset quota.
   * 
   * @example
   * 2
   */
  datasetQuota?: number;
  /**
   * @remarks
   * The number of datasets created.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Configuration and usage details for custom semantic search datasets that use uploaded files as data sources.
   */
  customSemanticSearchConfig?: ListDatasetsResponseBodyCustomSemanticSearchConfig;
  /**
   * @remarks
   * An array of dataset objects.
   */
  data?: ListDatasetsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: `true` (success) and `false` (failure).
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Configuration and usage details for API-integrated datasets.
   */
  thirdSearchConfig?: ListDatasetsResponseBodyThirdSearchConfig;
  /**
   * @remarks
   * The total number of datasets.
   * 
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

