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
  dataType?: number;
  listObject?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject;
  name?: string;
  symbol?: number;
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
  dataSets?: string;
  index?: number;
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
  asrTaskPriority?: number;
  asrVersion?: number;
  assignType?: number;
  createTime?: string;
  createUser?: number;
  dataConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfig;
  finishRate?: number;
  id?: number;
  manualReview?: number;
  modeCustomizationId?: string;
  modelName?: string;
  name?: string;
  numberExecuting?: number;
  numberFail?: number;
  numberSuccess?: number;
  numberSum?: number;
  schemeIdList?: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList;
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeList;
  schemeTaskConfigId?: number;
  sourceDataType?: number;
  status?: number;
  type?: number;
  updateTime?: string;
  updateUser?: number;
  userGroup?: string;
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
   * @remarks
   * Result code. **200** indicates success. Other values indicate failure. Callers can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Total entries.
   * 
   * @example
   * 22
   */
  count?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListSchemeTaskConfigResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * This field marks the data. When querying more than 10,000 entries using GetResult, include the \\`lastDataId\\` of the last entry from the previous query in each request parameter.
   * 
   * @example
   * xxx
   */
  lastDataId?: string;
  /**
   * @remarks
   * Provides error details on failure. For success, it is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  messages?: ListSchemeTaskConfigResponseBodyMessages;
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Entries displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4B0A8DCD-0DDF-5E80-8B9C-0A2F68B3403B
   */
  requestId?: string;
  /**
   * @remarks
   * Internal field. Ignore it.
   * 
   * @example
   * 忽略
   */
  resultCountId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Callers can use this field to determine if the request succeeded: \\`true\\` for success, \\`false\\`/\\`null\\` for failure.
   * 
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

