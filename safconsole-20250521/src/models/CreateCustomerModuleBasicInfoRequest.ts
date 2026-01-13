// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerModuleBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The display identifier of the model for customers.
   * 
   * @example
   * module01
   */
  customerModuleName?: string;
  /**
   * @remarks
   * Model description.
   * 
   * @example
   * 模型描述
   */
  description?: string;
  /**
   * @remarks
   * Model deployment type.
   * 
   * @example
   * PMML
   */
  moduleType?: string;
  /**
   * @remarks
   * Model storage path.
   * 
   * @example
   * customer/xxxxxxxxx/xxxxxxxx.pmml
   */
  storePath?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleName: 'CustomerModuleName',
      description: 'Description',
      moduleType: 'ModuleType',
      storePath: 'StorePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleName: 'string',
      description: 'string',
      moduleType: 'string',
      storePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

