// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityTemplatesResponseBodyPageInfoDataQualityTemplates extends $dara.Model {
  /**
   * @remarks
   * The time when the data quality rule template was created.
   * 
   * @example
   * 1729816478147
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the data quality rule template.
   * 
   * @example
   * 7892346529452
   */
  createUser?: string;
  /**
   * @remarks
   * The ID of the data quality rule template.
   * 
   * @example
   * 819cf1f8-29be-4f94-a9d0-c5c06c0c3d2a
   */
  id?: string;
  /**
   * @remarks
   * The time when the data quality rule template was updated.
   * 
   * @example
   * 1729816478147
   */
  modifyTime?: number;
  /**
   * @remarks
   * The last updater of the data quality rule template.
   * 
   * @example
   * 205250754596036836
   */
  modifyUser?: string;
  /**
   * @remarks
   * The owner of the data quality rule template.
   * 
   * @example
   * 205250754596036836
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7635
   */
  projectId?: number;
  /**
   * @remarks
   * Specific configurations of the data quality rule template. For more information, see [Data quality Spec configuration description](~2963394~).
   * 
   * @example
   * {
   *     "assertion": "anomaly detection fro id_not_null_cnt",
   *     "id_not_null_cnt": {
   *         "query": "SELECT COUNT(*) AS cnt FROM ${tableName} WHERE dt = \\"$[yyyymmdd-1]\\";"
   *     },
   *     "identity": "819cf1f8-29be-4f94-a9d0-c5c06c0c3d2a"
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      id: 'string',
      modifyTime: 'number',
      modifyUser: 'string',
      owner: 'string',
      projectId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityTemplatesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The list of rule templates.
   */
  dataQualityTemplates?: ListDataQualityTemplatesResponseBodyPageInfoDataQualityTemplates[];
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
   * The number of pages.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityTemplates: 'DataQualityTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityTemplates: { 'type': 'array', 'itemType': ListDataQualityTemplatesResponseBodyPageInfoDataQualityTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityTemplates)) {
      $dara.Model.validateArray(this.dataQualityTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Paged query results of data quality rule templates.
   */
  pageInfo?: ListDataQualityTemplatesResponseBodyPageInfo;
  /**
   * @remarks
   * The API request ID, which is generated as a UUID.
   * 
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDataQualityTemplatesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

