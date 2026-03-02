// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class ComponentTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @example
   * {}
   */
  configuration?: ConfigModel[];
  /**
   * @example
   * Redis模板描述
   */
  description?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  isCustom?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Redis模板
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
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * State
   */
  resourceType?: string;
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
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      configuration: 'configuration',
      description: 'description',
      id: 'id',
      isCustom: 'isCustom',
      name: 'name',
      productId: 'productId',
      requestId: 'requestId',
      resourceType: 'resourceType',
      type: 'type',
      useScope: 'useScope',
      useType: 'useType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      configuration: { 'type': 'array', 'itemType': ConfigModel },
      description: 'string',
      id: 'number',
      isCustom: 'boolean',
      name: 'string',
      productId: 'number',
      requestId: 'string',
      resourceType: 'string',
      type: 'string',
      useScope: 'string',
      useType: 'string',
      version: 'number',
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

