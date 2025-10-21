// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInstanceInfoResponseBodyHarmfulCategoryConfigInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryId?: number;
  categoryLabel?: string;
  /**
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @example
   * 0
   */
  inputOutputType?: number;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      inputOutputType: 'InputOutputType',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryLabel: 'string',
      categoryType: 'number',
      inputOutputType: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInstanceInfoResponseBodyPromptAttackInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryId?: number;
  categoryLabel?: string;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryLabel: 'CategoryLabel',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryLabel: 'string',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInstanceInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  /**
   * @example
   * opencompass-vllm07-acc
   */
  description?: string;
  /**
   * @example
   * eas-m-12345678
   */
  easServiceId?: string;
  /**
   * @example
   * rai_content_detection_model
   */
  easServiceName?: string;
  /**
   * @example
   * 1634122349000
   */
  gmtModified?: number;
  harmfulCategoryConfigInfoList?: GetModelInstanceInfoResponseBodyHarmfulCategoryConfigInfoList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * False
   */
  isSupportImage?: boolean;
  /**
   * @example
   * True
   */
  isSupportText?: boolean;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * demo
   */
  modelCallName?: string;
  /**
   * @example
   * 1
   */
  modelCategoryId?: number;
  /**
   * @example
   * 123
   */
  modelInstanceId?: number;
  /**
   * @example
   * 1
   */
  modelSource?: number;
  /**
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  modelToken?: string;
  /**
   * @example
   * http://12345*****.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  modelUrl?: string;
  /**
   * @example
   * http://12345*****.vpc.cn-shanghai.aliyuncs.com/api/predict/demo
   */
  modelVpcUrl?: string;
  promptAttackInfoList?: GetModelInstanceInfoResponseBodyPromptAttackInfoList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      easServiceId: 'EasServiceId',
      easServiceName: 'EasServiceName',
      gmtModified: 'GmtModified',
      harmfulCategoryConfigInfoList: 'HarmfulCategoryConfigInfoList',
      httpStatusCode: 'HttpStatusCode',
      isSupportImage: 'IsSupportImage',
      isSupportText: 'IsSupportText',
      message: 'Message',
      modelCallName: 'ModelCallName',
      modelCategoryId: 'ModelCategoryId',
      modelInstanceId: 'ModelInstanceId',
      modelSource: 'ModelSource',
      modelToken: 'ModelToken',
      modelUrl: 'ModelUrl',
      modelVpcUrl: 'ModelVpcUrl',
      promptAttackInfoList: 'PromptAttackInfoList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      easServiceId: 'string',
      easServiceName: 'string',
      gmtModified: 'number',
      harmfulCategoryConfigInfoList: { 'type': 'array', 'itemType': GetModelInstanceInfoResponseBodyHarmfulCategoryConfigInfoList },
      httpStatusCode: 'number',
      isSupportImage: 'boolean',
      isSupportText: 'boolean',
      message: 'string',
      modelCallName: 'string',
      modelCategoryId: 'number',
      modelInstanceId: 'number',
      modelSource: 'number',
      modelToken: 'string',
      modelUrl: 'string',
      modelVpcUrl: 'string',
      promptAttackInfoList: { 'type': 'array', 'itemType': GetModelInstanceInfoResponseBodyPromptAttackInfoList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryConfigInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryConfigInfoList);
    }
    if(Array.isArray(this.promptAttackInfoList)) {
      $dara.Model.validateArray(this.promptAttackInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

