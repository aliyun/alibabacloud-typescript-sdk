// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityTemplateResponseBodyDataQualityTemplate extends $dara.Model {
  /**
   * @remarks
   * The time when the data quality rule template was created.
   * 
   * @example
   * 1606724043000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the data quality rule template.
   * 
   * @example
   * 238428342865
   */
  createUser?: string;
  /**
   * @remarks
   * The ID of the data quality rule template.
   * 
   * @example
   * 10001
   */
  id?: string;
  /**
   * @remarks
   * The time when the data quality rule template was updated.
   * 
   * @example
   * 1606724043000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The last updater of the data quality rule template.
   * 
   * @example
   * 238428342865
   */
  modifyUser?: string;
  /**
   * @remarks
   * The owner of the data quality rule template.
   * 
   * @example
   * 238428342865
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 97535
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

export class GetDataQualityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data quality rule template.
   */
  dataQualityTemplate?: GetDataQualityTemplateResponseBodyDataQualityTemplate;
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

