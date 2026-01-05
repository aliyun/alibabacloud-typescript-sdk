// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @example
   * xgboost数据集加速实例
   */
  description?: string;
  /**
   * @example
   * 20
   */
  maxSlot?: string;
  /**
   * @example
   * acc_instance_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      maxSlot: 'MaxSlot',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      maxSlot: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

