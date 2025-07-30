// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject extends $dara.Model {
  listObject?: any[];
  static names(): { [key: string]: string } {
    return {
      listObject: 'ListObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listObject: { 'type': 'array', 'itemType': 'any' },
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

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest extends $dara.Model {
  /**
   * @example
   * 3
   */
  dataType?: number;
  listObject?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject;
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
      listObject: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject,
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    if(this.listObject && typeof (this.listObject as any).validate === 'function') {
      (this.listObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests extends $dara.Model {
  assignConfigContest?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest[];
  static names(): { [key: string]: string } {
    return {
      assignConfigContest: 'AssignConfigContest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContest: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfigContest)) {
      $dara.Model.validateArray(this.assignConfigContest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig extends $dara.Model {
  assignConfigContests?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests;
  static names(): { [key: string]: string } {
    return {
      assignConfigContests: 'AssignConfigContests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContests: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests,
    };
  }

  validate() {
    if(this.assignConfigContests && typeof (this.assignConfigContests as any).validate === 'function') {
      (this.assignConfigContests as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs extends $dara.Model {
  assignConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig[];
  static names(): { [key: string]: string } {
    return {
      assignConfig: 'AssignConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfig: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfig)) {
      $dara.Model.validateArray(this.assignConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfig extends $dara.Model {
  assignConfigs?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs;
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
      assignConfigs: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs,
      dataSets: 'string',
      index: 'number',
      resultParam: 'string',
    };
  }

  validate() {
    if(this.assignConfigs && typeof (this.assignConfigs as any).validate === 'function') {
      (this.assignConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeIdList extends $dara.Model {
  schemeIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schemeIdList: 'SchemeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.schemeIdList)) {
      $dara.Model.validateArray(this.schemeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList extends $dara.Model {
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

export class ListSchemeTaskConfigResponseBodyDataDataSchemeList extends $dara.Model {
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList[];
  static names(): { [key: string]: string } {
    return {
      schemeList: 'SchemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeList: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList },
    };
  }

  validate() {
    if(Array.isArray(this.schemeList)) {
      $dara.Model.validateArray(this.schemeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 2
   */
  asrTaskPriority?: number;
  asrVersion?: number;
  /**
   * @example
   * 0
   */
  assignType?: number;
  /**
   * @example
   * 1650418039000
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: number;
  dataConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfig;
  /**
   * @example
   * 100
   */
  finishRate?: number;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * 0
   */
  manualReview?: number;
  /**
   * @example
   * cdae396590b*****ec40f3476e274fc
   */
  modeCustomizationId?: string;
  modelName?: string;
  name?: string;
  /**
   * @example
   * 0
   */
  numberExecuting?: number;
  /**
   * @example
   * 0
   */
  numberFail?: number;
  /**
   * @example
   * 1000
   */
  numberSuccess?: number;
  /**
   * @example
   * 1000
   */
  numberSum?: number;
  schemeIdList?: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList;
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeList;
  /**
   * @example
   * 123
   */
  schemeTaskConfigId?: number;
  /**
   * @example
   * 2
   */
  sourceDataType?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 1650418039000
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: number;
  /**
   * @example
   * 1
   */
  userGroup?: string;
  /**
   * @example
   * 9f90b3efa2****0a49acec226eafc17
   */
  vocabId?: string;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      asrTaskPriority: 'AsrTaskPriority',
      asrVersion: 'AsrVersion',
      assignType: 'AssignType',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataConfig: 'DataConfig',
      finishRate: 'FinishRate',
      id: 'Id',
      manualReview: 'ManualReview',
      modeCustomizationId: 'ModeCustomizationId',
      modelName: 'ModelName',
      name: 'Name',
      numberExecuting: 'NumberExecuting',
      numberFail: 'NumberFail',
      numberSuccess: 'NumberSuccess',
      numberSum: 'NumberSum',
      schemeIdList: 'SchemeIdList',
      schemeList: 'SchemeList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      sourceDataType: 'SourceDataType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      userGroup: 'UserGroup',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrTaskPriority: 'number',
      asrVersion: 'number',
      assignType: 'number',
      createTime: 'string',
      createUser: 'number',
      dataConfig: ListSchemeTaskConfigResponseBodyDataDataDataConfig,
      finishRate: 'number',
      id: 'number',
      manualReview: 'number',
      modeCustomizationId: 'string',
      modelName: 'string',
      name: 'string',
      numberExecuting: 'number',
      numberFail: 'number',
      numberSuccess: 'number',
      numberSum: 'number',
      schemeIdList: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList,
      schemeList: ListSchemeTaskConfigResponseBodyDataDataSchemeList,
      schemeTaskConfigId: 'number',
      sourceDataType: 'number',
      status: 'number',
      type: 'number',
      updateTime: 'string',
      updateUser: 'number',
      userGroup: 'string',
      vocabId: 'string',
      vocabName: 'string',
    };
  }

  validate() {
    if(this.dataConfig && typeof (this.dataConfig as any).validate === 'function') {
      (this.dataConfig as any).validate();
    }
    if(this.schemeIdList && typeof (this.schemeIdList as any).validate === 'function') {
      (this.schemeIdList as any).validate();
    }
    if(this.schemeList && typeof (this.schemeList as any).validate === 'function') {
      (this.schemeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyData extends $dara.Model {
  data?: ListSchemeTaskConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataData },
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

export class ListSchemeTaskConfigResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListSchemeTaskConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxx
   */
  lastDataId?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: ListSchemeTaskConfigResponseBodyMessages;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 4B0A8DCD-0DDF-5E80-8B9C-0A2F68B3403B
   */
  requestId?: string;
  resultCountId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      lastDataId: 'LastDataId',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListSchemeTaskConfigResponseBodyData,
      httpStatusCode: 'number',
      lastDataId: 'string',
      message: 'string',
      messages: ListSchemeTaskConfigResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

