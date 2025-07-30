// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests extends $dara.Model {
  /**
   * @example
   * 3
   */
  dataType?: number;
  listObject?: any[];
  /**
   * @example
   * callStartTime
   */
  name?: string;
  /**
   * @example
   * 4
   */
  symbol?: number;
  /**
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
  assignConfigs?: GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs[];
  /**
   * @example
   * []
   */
  dataSets?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
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
  name?: string;
  /**
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
  asrTaskPriority?: number;
  assignType?: number;
  dataConfig?: GetSchemeTaskConfigResponseBodyDataDataConfig;
  /**
   * @example
   * 3
   */
  id?: number;
  manualReview?: number;
  modeCustomizationId?: string;
  modelName?: string;
  /**
   * @example
   * test
   */
  name?: string;
  schemeIdList?: number[];
  schemeList?: GetSchemeTaskConfigResponseBodyDataSchemeList[];
  /**
   * @example
   * 123
   */
  schemeTaskConfigId?: number;
  /**
   * @example
   * 1
   */
  sourceDataType?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetSchemeTaskConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
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

