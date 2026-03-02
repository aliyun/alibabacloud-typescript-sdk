// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class ComponentCreateCmd extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * false
   */
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
   * @example
   * 1
   */
  resourceId?: number;
  /**
   * @example
   * 1
   */
  scopeServiceIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * State
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INNER
   */
  useScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SHARESHARE
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      configuration: 'configuration',
      description: 'description',
      env: 'env',
      isCustom: 'isCustom',
      name: 'name',
      productId: 'productId',
      resourceId: 'resourceId',
      scopeServiceIds: 'scopeServiceIds',
      templateId: 'templateId',
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
      env: 'string',
      isCustom: 'boolean',
      name: 'string',
      productId: 'number',
      resourceId: 'number',
      scopeServiceIds: 'string',
      templateId: 'number',
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

