// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests extends $dara.Model {
  /**
   * @remarks
   * Type of the value
   * 
   * - 0: String
   * 
   * - 1: Number
   * 
   * - 2: List (use list type for all parameter values when using =)
   * 
   * - 3: Date
   * 
   * - 4: List_Json
   * 
   * @example
   * 3
   */
  dataType?: number;
  /**
   * @remarks
   * List of on-the-fly recording data
   */
  listObject?: any[];
  /**
   * @remarks
   * Check item name
   * 
   * @example
   * callStartTime
   */
  name?: string;
  /**
   * @remarks
   * Operator
   * 
   * - 1: ==
   * 
   * - 2: >
   * 
   * - 3: <
   * 
   * - 4: range
   * 
   * - 5: >=
   * 
   * - 6: <=
   * 
   * - 7: !=
   * 
   * - 8: null
   * 
   * - 9: not null
   * 
   * - 10: contains
   * 
   * - 11: does not contain
   * 
   * @example
   * 4
   */
  symbol?: number;
  /**
   * @remarks
   * Matching value for on-the-fly recording data
   * 
   * @example
   * {\\"start\\":\\"2022-09-01 00:00:00\\",\\"end\\":\\"2022-09-30 00:00:00\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      listObject: 'ListObject',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      listObject: { 'type': 'array', 'itemType': 'any' },
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listObject)) {
      $dara.Model.validateArray(this.listObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs extends $dara.Model {
  /**
   * @remarks
   * Parameter matching configurations for on-the-fly recording
   */
  assignConfigContests?: GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests[];
  static names(): { [key: string]: string } {
    return {
      assignConfigContests: 'AssignConfigContests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContests: { 'type': 'array', 'itemType': GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfigContests)) {
      $dara.Model.validateArray(this.assignConfigContests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeTaskConfigResponseBodyDataDataConfig extends $dara.Model {
  /**
   * @remarks
   * Data screening items for on-the-fly recording
   */
  assignConfigs?: GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs[];
  /**
   * @remarks
   * Dataset task. Manage datasets.
   * 
   * @example
   * []
   */
  dataSets?: string;
  /**
   * @remarks
   * Index number
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * JSON text for filtering conditions used in secondary quality inspection. For details, see the request parameters of the GetResult API.
   * 
   * @example
   * {}
   */
  resultParam?: string;
  static names(): { [key: string]: string } {
    return {
      assignConfigs: 'AssignConfigs',
      dataSets: 'DataSets',
      index: 'Index',
      resultParam: 'ResultParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigs: { 'type': 'array', 'itemType': GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs },
      dataSets: 'string',
      index: 'number',
      resultParam: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignConfigs)) {
      $dara.Model.validateArray(this.assignConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeTaskConfigResponseBodyDataSchemeList extends $dara.Model {
  /**
   * @remarks
   * Quality inspection scheme name
   * 
   * @example
   * 质检方案B
   */
  name?: string;
  /**
   * @remarks
   * Quality inspection scheme ID
   * 
   * @example
   * 158
   */
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schemeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeTaskConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Task priority:
   * 
   * - 0 (low)
   * 
   * - 1 (medium)
   * 
   * - 2 (high)
   * 
   * @example
   * 2
   */
  asrTaskPriority?: number;
  /**
   * @remarks
   * Assignment type
   * 
   * @example
   * 0
   */
  assignType?: number;
  /**
   * @remarks
   * Data configuration
   */
  dataConfig?: GetSchemeTaskConfigResponseBodyDataDataConfig;
  /**
   * @remarks
   * Quality inspection task ID
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * Manual review
   * 
   * @example
   * 0
   */
  manualReview?: number;
  /**
   * @remarks
   * Language model ID
   * 
   * @example
   * cdae396590b*****ec40f3476e274fc
   */
  modeCustomizationId?: string;
  /**
   * @remarks
   * Language model name
   * 
   * @example
   * 自定义模型
   */
  modelName?: string;
  /**
   * @remarks
   * Quality inspection task name
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Quality inspection scheme IDs
   */
  schemeIdList?: number[];
  /**
   * @remarks
   * Quality inspection schemes
   */
  schemeList?: GetSchemeTaskConfigResponseBodyDataSchemeList[];
  /**
   * @remarks
   * Quality inspection task ID
   * 
   * @example
   * 123
   */
  schemeTaskConfigId?: number;
  /**
   * @remarks
   * Quality inspection result type:
   * 
   * - 1: offline voice
   * 
   * - 2: offline text
   * 
   * - 3: real-time voice
   * 
   * - 4: real-time text
   * 
   * - 5: contact center secondary quality inspection
   * 
   * - 51: call center voice secondary quality inspection
   * 
   * - 52: call center text secondary quality inspection
   * 
   * - 11: dataset voice
   * 
   * - 12: dataset text
   * 
   * @example
   * 1
   */
  sourceDataType?: string;
  /**
   * @remarks
   * Enable status. Valid values: 0 (disabled) or 1 (enabled)
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      asrTaskPriority: 'AsrTaskPriority',
      assignType: 'AssignType',
      dataConfig: 'DataConfig',
      id: 'Id',
      manualReview: 'ManualReview',
      modeCustomizationId: 'ModeCustomizationId',
      modelName: 'ModelName',
      name: 'Name',
      schemeIdList: 'SchemeIdList',
      schemeList: 'SchemeList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      sourceDataType: 'SourceDataType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrTaskPriority: 'number',
      assignType: 'number',
      dataConfig: GetSchemeTaskConfigResponseBodyDataDataConfig,
      id: 'number',
      manualReview: 'number',
      modeCustomizationId: 'string',
      modelName: 'string',
      name: 'string',
      schemeIdList: { 'type': 'array', 'itemType': 'number' },
      schemeList: { 'type': 'array', 'itemType': GetSchemeTaskConfigResponseBodyDataSchemeList },
      schemeTaskConfigId: 'number',
      sourceDataType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.dataConfig && typeof (this.dataConfig as any).validate === 'function') {
      (this.dataConfig as any).validate();
    }
    if(Array.isArray(this.schemeIdList)) {
      $dara.Model.validateArray(this.schemeIdList);
    }
    if(Array.isArray(this.schemeList)) {
      $dara.Model.validateArray(this.schemeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** means success.
   * 
   * > Any other value means failure. The caller can use this field to identify the cause.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data. See the additional notes below.
   */
  data?: GetSchemeTaskConfigResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error details if the request failed. Returns successful if the request succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Use this field to check the result: true means success, false or null means failure.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSchemeTaskConfigResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

