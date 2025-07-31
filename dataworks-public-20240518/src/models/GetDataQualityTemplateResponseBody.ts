// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityTemplateResponseBodyDataQualityTemplate extends $dara.Model {
  /**
   * @example
   * 1606724043000
   */
  createTime?: number;
  /**
   * @example
   * 238428342865
   */
  createUser?: string;
  /**
   * @example
   * 10001
   */
  id?: string;
  /**
   * @example
   * 1606724043000
   */
  modifyTime?: number;
  /**
   * @example
   * 238428342865
   */
  modifyUser?: string;
  /**
   * @example
   * 238428342865
   */
  owner?: string;
  /**
   * @example
   * 97535
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

export class GetDataQualityTemplateResponseBody extends $dara.Model {
  dataQualityTemplate?: GetDataQualityTemplateResponseBodyDataQualityTemplate;
  /**
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityTemplate: 'DataQualityTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityTemplate: GetDataQualityTemplateResponseBodyDataQualityTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityTemplate && typeof (this.dataQualityTemplate as any).validate === 'function') {
      (this.dataQualityTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

