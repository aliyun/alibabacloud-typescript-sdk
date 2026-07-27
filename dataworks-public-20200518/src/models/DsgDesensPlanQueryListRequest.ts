// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanQueryListRequestColumns extends $dara.Model {
  column?: string;
  dbType?: string;
  project?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'column',
      dbType: 'dbType',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      dbType: 'string',
      project: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanQueryListRequest extends $dara.Model {
  /**
   * @remarks
   * The owner of the desensitization rule.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the desensitization rule.
   * 
   * @example
   * phone
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the Level-2 data desensitization scene. You can call the [DsgSceneQuerySceneListByName](https://help.aliyun.com/document_detail/2786322.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sceneId?: number;
  /**
   * @remarks
   * The status of the desensitization rule. Valid values:
   * 
   * - 0: Inactive
   * 
   * - 1: Active
   * 
   * @example
   * 1
   */
  status?: number;
  columns?: DsgDesensPlanQueryListRequestColumns[];
  dataType?: string;
  emptyNotDesesn?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ruleName: 'RuleName',
      sceneId: 'SceneId',
      status: 'Status',
      columns: 'columns',
      dataType: 'dataType',
      emptyNotDesesn: 'emptyNotDesesn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleName: 'string',
      sceneId: 'number',
      status: 'number',
      columns: { 'type': 'array', 'itemType': DsgDesensPlanQueryListRequestColumns },
      dataType: 'string',
      emptyNotDesesn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

