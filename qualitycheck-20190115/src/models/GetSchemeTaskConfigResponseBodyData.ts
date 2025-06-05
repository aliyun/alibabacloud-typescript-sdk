// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSchemeTaskConfigResponseBodyDataDataConfig } from "./GetSchemeTaskConfigResponseBodyDataDataConfig";
import { GetSchemeTaskConfigResponseBodyDataSchemeList } from "./GetSchemeTaskConfigResponseBodyDataSchemeList";


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

