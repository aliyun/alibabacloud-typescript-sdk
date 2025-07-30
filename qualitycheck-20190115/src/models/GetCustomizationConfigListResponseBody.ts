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

export class GetCustomizationConfigListResponseBodyData extends $dara.Model {
  modelCustomizationDataSetPo?: GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo[];
  static names(): { [key: string]: string } {
    return {
      modelCustomizationDataSetPo: 'ModelCustomizationDataSetPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomizationDataSetPo: { 'type': 'array', 'itemType': GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo },
    };
  }

  validate() {
    if(Array.isArray(this.modelCustomizationDataSetPo)) {
      $dara.Model.validateArray(this.modelCustomizationDataSetPo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomizationConfigListResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomizationConfigListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

