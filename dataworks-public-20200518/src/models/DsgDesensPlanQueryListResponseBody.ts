// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanQueryListResponseBodyPageDataDataDesensPlan extends $dara.Model {
  /**
   * @remarks
   * The type of the desensitization plan.
   * 
   * @example
   * hash
   */
  desensPlanType?: string;
  /**
   * @remarks
   * The parameters for the desensitization rule. For details, see the [DsgDesensPlanAddOrUpdate](https://help.aliyun.com/document_detail/2786295.html) operation.
   */
  extParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      desensPlanType: 'DesensPlanType',
      extParam: 'ExtParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensPlanType: 'string',
      extParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.extParam) {
      $dara.Model.validateMap(this.extParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanQueryListResponseBodyPageDataDataColumns extends $dara.Model {
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

export class DsgDesensPlanQueryListResponseBodyPageDataData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to add a watermark. Valid values:
   * 
   * - true: A watermark is added.
   * 
   * - false: No watermark is added.
   * 
   * @example
   * true
   */
  checkWatermark?: boolean;
  /**
   * @remarks
   * The sensitive data type.
   * 
   * @example
   * phone
   */
  dataType?: string;
  /**
   * @remarks
   * The desensitization method.
   * 
   * @example
   * HASH
   */
  desenMode?: string;
  /**
   * @remarks
   * The details of the desensitization plan.
   */
  desensPlan?: DsgDesensPlanQueryListResponseBodyPageDataDataDesensPlan;
  /**
   * @remarks
   * The desensitization rule.
   * 
   * @example
   * HASH
   */
  desensRule?: string;
  /**
   * @remarks
   * The desensitization method.
   * 
   * @example
   * HASH
   */
  desensWay?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the desensitization rule.
   * 
   * @example
   * 123
   */
  id?: number;
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
   * The name of the desensitization rule.
   * 
   * @example
   * phone_hash
   */
  ruleName?: string;
  /**
   * @remarks
   * The level-1 desensitization scene code. Valid values:
   * 
   * - Desensitization for display in Data Development and Data Map: dataworks_display_desense_code
   * 
   * - Desensitization at the MaxCompute engine layer: maxcompute_desense_code
   * 
   * - Desensitization at the MaxCompute engine layer (New): maxcompute_new_desense_code
   * 
   * - Desensitization at the Hologres engine layer: hologres_display_desense_code
   * 
   * - Static desensitization in Data Integration: dataworks_data_integration_desense_code
   * 
   * - Desensitization for display in Data Analysis: dataworks_analysis_desense_code
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  /**
   * @remarks
   * The name of the level-2 desensitization scene.
   * 
   * @example
   * test_scene
   */
  sceneName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - 0: Inactive.
   * 
   * - 1: Active.
   * 
   * @example
   * 1
   */
  status?: number;
  columns?: DsgDesensPlanQueryListResponseBodyPageDataDataColumns[];
  emptyNotDesesn?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkWatermark: 'CheckWatermark',
      dataType: 'DataType',
      desenMode: 'DesenMode',
      desensPlan: 'DesensPlan',
      desensRule: 'DesensRule',
      desensWay: 'DesensWay',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      owner: 'Owner',
      ruleName: 'RuleName',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      status: 'Status',
      columns: 'columns',
      emptyNotDesesn: 'emptyNotDesesn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkWatermark: 'boolean',
      dataType: 'string',
      desenMode: 'string',
      desensPlan: DsgDesensPlanQueryListResponseBodyPageDataDataDesensPlan,
      desensRule: 'string',
      desensWay: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      owner: 'string',
      ruleName: 'string',
      sceneCode: 'string',
      sceneName: 'string',
      status: 'number',
      columns: { 'type': 'array', 'itemType': DsgDesensPlanQueryListResponseBodyPageDataDataColumns },
      emptyNotDesesn: 'boolean',
    };
  }

  validate() {
    if(this.desensPlan && typeof (this.desensPlan as any).validate === 'function') {
      (this.desensPlan as any).validate();
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanQueryListResponseBodyPageData extends $dara.Model {
  /**
   * @remarks
   * The details of the desensitization rules.
   */
  data?: DsgDesensPlanQueryListResponseBodyPageDataData[];
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
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of matching desensitization rules.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DsgDesensPlanQueryListResponseBodyPageDataData },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanQueryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The paginated data.
   */
  pageData?: DsgDesensPlanQueryListResponseBodyPageData;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      pageData: 'PageData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      pageData: DsgDesensPlanQueryListResponseBodyPageData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageData && typeof (this.pageData as any).validate === 'function') {
      (this.pageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

