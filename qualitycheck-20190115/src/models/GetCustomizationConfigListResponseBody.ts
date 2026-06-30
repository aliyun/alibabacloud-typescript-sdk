// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo extends $dara.Model {
  asrVersion?: number;
  createTime?: string;
  modeCustomizationId?: string;
  modelId?: number;
  modelName?: string;
  modelStatus?: number;
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
   * @remarks
   * The result code. A value of **200** indicates that the request succeeded. Other values indicate failure. Use this field to identify the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomizationConfigListResponseBodyData;
  /**
   * @remarks
   * If an error occurs, this field contains error details. If the request succeeds, the value is \\`successful\\`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Use this field to check the request status. A value of \\`true\\` means success. A value of \\`false\\` or \\`null\\` means failure.
   * 
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

