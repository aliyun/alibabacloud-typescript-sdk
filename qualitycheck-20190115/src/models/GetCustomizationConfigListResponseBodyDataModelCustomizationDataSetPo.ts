// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo extends $dara.Model {
  asrVersion?: number;
  /**
   * @example
   * 2019-01-08
   */
  createTime?: string;
  /**
   * @example
   * cdae396590bb479a9ec40f3476e274fc
   */
  modeCustomizationId?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 5
   */
  modelStatus?: number;
  /**
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      createTime: 'CreateTime',
      modeCustomizationId: 'ModeCustomizationId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      createTime: 'string',
      modeCustomizationId: 'string',
      modelId: 'number',
      modelName: 'string',
      modelStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

