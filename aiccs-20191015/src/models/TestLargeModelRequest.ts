// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestLargeModelRequest extends $dara.Model {
  /**
   * @remarks
   * 基础模型
   */
  baseModel?: string[];
  /**
   * @remarks
   * 场景ID
   * 
   * @example
   * 1232
   */
  modelCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户对话内容
   * 
   * @example
   * 示例值示例值示例值
   */
  userDialogContent?: string;
  static names(): { [key: string]: string } {
    return {
      baseModel: 'BaseModel',
      modelCode: 'ModelCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userDialogContent: 'UserDialogContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseModel: { 'type': 'array', 'itemType': 'string' },
      modelCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userDialogContent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baseModel)) {
      $dara.Model.validateArray(this.baseModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

