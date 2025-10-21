// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelInstanceRequest extends $dara.Model {
  /**
   * @example
   * vllm==0.9.0
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
  /**
   * @example
   * 608226
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      easServiceId: 'EasServiceId',
      easServiceName: 'EasServiceName',
      modelCallName: 'ModelCallName',
      modelCategoryId: 'ModelCategoryId',
      modelInstanceId: 'ModelInstanceId',
      modelToken: 'ModelToken',
      modelUrl: 'ModelUrl',
      modelVpcUrl: 'ModelVpcUrl',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      easServiceId: 'string',
      easServiceName: 'string',
      modelCallName: 'string',
      modelCategoryId: 'number',
      modelInstanceId: 'number',
      modelToken: 'string',
      modelUrl: 'string',
      modelVpcUrl: 'string',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

