// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateClientRequest extends $dara.Model {
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
   * The allowed model group configuration.
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
   * The discount coefficient.
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
   * The remarks.
   * 
   * @example
   * Remarks
   */
  remark?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      allowedModelGroupConfig: 'allowedModelGroupConfig',
      allowedModels: 'allowedModels',
      contact: 'contact',
      discount: 'discount',
      name: 'name',
      remark: 'remark',
      status: 'status',
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
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

