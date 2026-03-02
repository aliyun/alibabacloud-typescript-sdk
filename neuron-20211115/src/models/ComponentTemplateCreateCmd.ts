// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class ComponentTemplateCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  configuration?: ConfigModel[];
  /**
   * @example
   * 用于统一管理资源
   */
  description?: string;
  isCustom?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Redis
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * State.Redis
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Inner
   */
  useScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Share
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      configuration: 'configuration',
      description: 'description',
      isCustom: 'isCustom',
      name: 'name',
      productId: 'productId',
      type: 'type',
      useScope: 'useScope',
      useType: 'useType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      configuration: { 'type': 'array', 'itemType': ConfigModel },
      description: 'string',
      isCustom: 'boolean',
      name: 'string',
      productId: 'number',
      type: 'string',
      useScope: 'string',
      useType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

