// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class ComponentTemplateUpdateCmd extends $dara.Model {
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
      useScope: 'useScope',
      useType: 'useType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': ConfigModel },
      description: 'string',
      id: 'number',
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

