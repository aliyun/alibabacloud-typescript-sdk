// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanQueryListResponseBodyPageDataDataDesensPlan extends $dara.Model {
  /**
   * @remarks
   * The type of the data masking rule.
   * 
   * @example
   * hash
   */
  desensPlanType?: string;
  /**
   * @remarks
   * The parameters for the data masking rule. For more information about the parameters, see the [DsgDesensPlanAddOrUpdate](https://help.aliyun.com/document_detail/2786295.html) API reference.
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

export class DsgDesensPlanQueryListResponseBodyPageDataData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a watermark is added. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  checkWatermark?: boolean;
  /**
   * @remarks
   * The sensitive field type.
   * 
   * @example
   * phone
   */
  dataType?: string;
  /**
   * @remarks
   * The type of the data masking method.
   * 
   * @example
   * HASH
   */
  desenMode?: string;
  /**
   * @remarks
   * The details of the data masking rule.
   */
  desensPlan?: DsgDesensPlanQueryListResponseBodyPageDataDataDesensPlan;
  /**
   * @remarks
   * The data masking rule.
   * 
   * @example
   * HASH
   */
  desensRule?: string;
  /**
   * @remarks
   * The data masking method.
   * 
   * @example
   * HASH
   */
  desensWay?: string;
  /**
   * @remarks
   * The time when the data masking rule was created.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data masking rule was modified.
   * 
   * @example
   * 2024-05-09 15:46:20
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the data masking rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The owner of the data masking rule.
   * 
   * @example
   * user1
   */
  owner?: string;
  /**
   * @remarks
   * The name of the data masking rule.
   * 
   * @example
   * phone_hash
   */
  ruleName?: string;
  /**
   * @remarks
   * The code of the level-1 data masking scenario to which the rule belongs. Valid values:
   * 
   * *   dataworks_display_desense_code: masking of displayed data in DataStudio and Data Map
   * *   maxcompute_desense_code: data masking at the MaxCompute compute engine layer
   * *   maxcompute_new_desense_code: data masking at the MaxCompute compute engine layer (new)
   * *   hologres_display_desense_code: data masking at the Hologres compute engine layer
   * *   dataworks_data_integration_desense_code: static data masking in Data Integration
   * *   dataworks_analysis_desense_code: masking of displayed data in DataAnalysis
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  /**
   * @remarks
   * The name of the level-2 data masking scenario to which the data masking rule belongs.
   * 
   * @example
   * test_scene
   */
  sceneName?: string;
  /**
   * @remarks
   * The status of the data masking rule. Valid values:
   * 
   * *   0: expired
   * *   1: effective
   * 
   * @example
   * 1
   */
  status?: number;
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
    };
  }

  validate() {
    if(this.desensPlan && typeof (this.desensPlan as any).validate === 'function') {
      (this.desensPlan as any).validate();
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
   * The information about the data masking rule.
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
   * The number of data masking rules.
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
   * The pagination information.
   */
  pageData?: DsgDesensPlanQueryListResponseBodyPageData;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

