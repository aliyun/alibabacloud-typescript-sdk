// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class PdpComponent extends $dara.Model {
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
   * 组件描述
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  env?: string;
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
   * 组件
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
   * 1
   */
  resourceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * State
   */
  resourceType?: string;
  /**
   * @example
   * 1
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateConfiguration?: ConfigModel[];
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
   * 1
   */
  templateVersion?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CACHE
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
      env: 'env',
      id: 'id',
      isCustom: 'isCustom',
      name: 'name',
      productId: 'productId',
      requestId: 'requestId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      scope: 'scope',
      templateConfiguration: 'templateConfiguration',
      templateId: 'templateId',
      templateVersion: 'templateVersion',
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
      id: 'number',
      isCustom: 'boolean',
      name: 'string',
      productId: 'number',
      requestId: 'string',
      resourceId: 'number',
      resourceType: 'string',
      scope: 'string',
      templateConfiguration: { 'type': 'array', 'itemType': ConfigModel },
      templateId: 'number',
      templateVersion: 'number',
      type: 'string',
      useScope: 'string',
      useType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    if(Array.isArray(this.templateConfiguration)) {
      $dara.Model.validateArray(this.templateConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

