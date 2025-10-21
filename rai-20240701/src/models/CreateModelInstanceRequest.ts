// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelInstanceRequest extends $dara.Model {
  /**
   * @example
   * eas-m-12345678
   */
  easServiceId?: string;
  /**
   * @example
   * demo
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
   * @remarks
   * EAS Token
   * 
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  modelToken?: string;
  /**
   * @example
   * http://12345*****.cn-shanghai.aliyuncs.com/api/predict/demo
   */
  modelUrl?: string;
  /**
   * @example
   * http://12345*****.vpc.cn-shanghai.aliyuncs.com/api/predict/demo
   */
  modelVpcUrl?: string;
  /**
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      easServiceId: 'EasServiceId',
      easServiceName: 'EasServiceName',
      modelCallName: 'ModelCallName',
      modelCategoryId: 'ModelCategoryId',
      modelToken: 'ModelToken',
      modelUrl: 'ModelUrl',
      modelVpcUrl: 'ModelVpcUrl',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      easServiceId: 'string',
      easServiceName: 'string',
      modelCallName: 'string',
      modelCategoryId: 'number',
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

