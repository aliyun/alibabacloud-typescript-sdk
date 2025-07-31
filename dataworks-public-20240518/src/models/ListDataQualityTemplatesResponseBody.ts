// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityTemplatesResponseBodyPageInfoDataQualityTemplates extends $dara.Model {
  /**
   * @example
   * 1729816478147
   */
  createTime?: number;
  /**
   * @example
   * 7892346529452
   */
  createUser?: string;
  /**
   * @example
   * 819cf1f8-29be-4f94-a9d0-c5c06c0c3d2a
   */
  id?: string;
  /**
   * @example
   * 1729816478147
   */
  modifyTime?: number;
  /**
   * @example
   * 205250754596036836
   */
  modifyUser?: string;
  /**
   * @example
   * 205250754596036836
   */
  owner?: string;
  /**
   * @example
   * 7635
   */
  projectId?: number;
  /**
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
  dataQualityTemplates?: ListDataQualityTemplatesResponseBodyPageInfoDataQualityTemplates[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  pageInfo?: ListDataQualityTemplatesResponseBodyPageInfo;
  /**
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

