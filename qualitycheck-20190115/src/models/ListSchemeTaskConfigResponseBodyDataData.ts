// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemeTaskConfigResponseBodyDataDataDataConfig } from "./ListSchemeTaskConfigResponseBodyDataDataDataConfig";
import { ListSchemeTaskConfigResponseBodyDataDataSchemeIdList } from "./ListSchemeTaskConfigResponseBodyDataDataSchemeIdList";
import { ListSchemeTaskConfigResponseBodyDataDataSchemeList } from "./ListSchemeTaskConfigResponseBodyDataDataSchemeList";


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

