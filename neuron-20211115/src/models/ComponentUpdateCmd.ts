// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class ComponentUpdateCmd extends $dara.Model {
  configuration?: ConfigModel[];
  /**
   * @example
   * 用于统一管理资源
   */
  description?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1,2
   */
  scope?: string;
  /**
   * @example
   * Inner
   */
  useScope?: string;
  /**
   * @example
   * Share
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      id: 'id',
      scope: 'scope',
      useScope: 'useScope',
      useType: 'useType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': ConfigModel },
      description: 'string',
      id: 'number',
      scope: 'string',
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

