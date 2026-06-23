// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * 触发器ID。
   * 
   * @example
   * 75973497486******
   */
  id?: string;
  /**
   * @remarks
   * 触发器名称。
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c259f563386444ebb8d7****
   */
  clusterId?: string;
  /**
   * @remarks
   * 触发器项目名称。
   * 
   * 由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`，取值示例：default/test-app。
   * 
   * @example
   * default/test-app
   */
  projectId?: string;
  /**
   * @remarks
   * 触发器类型。
   * 
   * 取值：
   * 
   * - `deployment`：针对无状态应用的触发器。 
   * 
   * - `application`：针对应用中心应用的触发器。
   * 
   * @example
   * deployment
   */
  type?: string;
  /**
   * @remarks
   * 触发器行为，取值：
   * 
   * `redeploy`: 重新部署应用。
   * 
   * @example
   * redeploy
   */
  action?: string;
  /**
   * @remarks
   * Token信息。
   * 
   * @example
   * eyJhbGci***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      clusterId: 'cluster_id',
      projectId: 'project_id',
      type: 'type',
      action: 'action',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      clusterId: 'string',
      projectId: 'string',
      type: 'string',
      action: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTriggerResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeTriggerResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

