// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateClientRequest extends $dara.Model {
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * Hangzhou
   */
  address?: string;
  /**
   * @remarks
   * The allowed model group configuration in JSON string format: {"model_ids":[101],"group_ids":["mg_xxx"]}. If both this field and allowedModels are specified, this field takes precedence.
   * 
   * @example
   * {"model_ids":[101],"group_ids":["mg_xxx"]}
   */
  allowedModelGroupConfig?: string;
  /**
   * @remarks
   * The list of allowed model IDs, separated by commas. An empty value indicates all models are allowed.
   * 
   * @example
   * 1,2,3
   */
  allowedModels?: string;
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * 13800138000
   */
  contact?: string;
  /**
   * @remarks
   * The discount coefficient. A value of 1.0 indicates no discount, and 0.8 indicates a 20% discount. Default value: 1.0.
   * 
   * @example
   * 1.0
   */
  discount?: number;
  /**
   * @remarks
   * The customer name.
   * 
   * @example
   * MyCustomer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent department. If not specified, a top-level department is created.
   * 
   * @example
   * 292090
   */
  parentId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Remarks
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModelGroupConfig: 'allowedModelGroupConfig',
      allowedModels: 'allowedModels',
      contact: 'contact',
      discount: 'discount',
      name: 'name',
      parentId: 'parentId',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allowedModelGroupConfig: 'string',
      allowedModels: 'string',
      contact: 'string',
      discount: 'number',
      name: 'string',
      parentId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

