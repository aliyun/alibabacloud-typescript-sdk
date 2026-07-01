// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequestDatasetQuery extends $dara.Model {
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * GENERAL
   */
  contentType?: string;
  /**
   * @remarks
   * The data domain ID.
   * 
   * @example
   * 74280
   */
  dataUnit?: string;
  /**
   * @remarks
   * Specifies whether to include version details. Default value: FALSE.
   */
  includeVersionList?: boolean;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * rds
   */
  keyword?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 300001391
   */
  owner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
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
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7273382541481536
   */
  projectId?: number;
  /**
   * @remarks
   * The dataset scenario. Valid values:
   * - OFFLINE: offline.
   * - REALTIME: real-time.
   * 
   * @example
   * OFFLINE
   */
  scenario?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30001011
   */
  tenantId?: number;
  /**
   * @remarks
   * The dataset type. If left empty, all types are queried.
   */
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      dataUnit: 'DataUnit',
      includeVersionList: 'IncludeVersionList',
      keyword: 'Keyword',
      owner: 'Owner',
      page: 'Page',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      scenario: 'Scenario',
      storageType: 'StorageType',
      tenantId: 'TenantId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataUnit: 'string',
      includeVersionList: 'boolean',
      keyword: 'string',
      owner: 'string',
      page: 'number',
      pageSize: 'number',
      projectId: 'number',
      scenario: 'string',
      storageType: 'string',
      tenantId: 'number',
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  datasetQuery?: ListDatasetsRequestDatasetQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      datasetQuery: 'DatasetQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetQuery: ListDatasetsRequestDatasetQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.datasetQuery && typeof (this.datasetQuery as any).validate === 'function') {
      (this.datasetQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

