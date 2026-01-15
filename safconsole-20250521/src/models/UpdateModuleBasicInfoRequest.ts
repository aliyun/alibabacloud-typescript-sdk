// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModuleBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Customer model ID
   * 
   * @example
   * 456
   */
  customerModuleId?: number;
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * moduleName
   */
  customerModuleName?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 备注
   */
  description?: string;
  /**
   * @remarks
   * Module type.
   * 
   * @example
   * PMML
   */
  moduleType?: string;
  /**
   * @remarks
   * Test address.
   * 
   * @example
   * saf/xxxxx/xxx.pmml
   */
  storePath?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
      customerModuleName: 'CustomerModuleName',
      description: 'Description',
      moduleType: 'ModuleType',
      storePath: 'StorePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'number',
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

