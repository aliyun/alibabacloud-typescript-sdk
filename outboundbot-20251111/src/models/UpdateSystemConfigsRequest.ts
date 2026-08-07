// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSystemConfigsRequestConfigs extends $dara.Model {
  /**
   * @example
   * callableTime
   */
  name?: string;
  /**
   * @example
   * 5
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSystemConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * 配置列表
   */
  configs?: UpdateSystemConfigsRequestConfigs[];
  /**
   * @remarks
   * 对象ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  objectId?: string;
  /**
   * @remarks
   * 外呼开发时补充参数限制
   * 
   * @example
   * INSTANCE
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': UpdateSystemConfigsRequestConfigs },
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

