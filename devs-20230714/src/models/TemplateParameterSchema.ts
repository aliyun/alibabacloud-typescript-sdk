// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateParameterSchemaRoleExtension } from "./TemplateParameterSchemaRoleExtension";


export class TemplateParameterSchema extends $dara.Model {
  /**
   * @example
   * defaultValue
   */
  default?: any;
  /**
   * @example
   * Parameters for testing
   */
  description?: string;
  enum?: string[];
  /**
   * @example
   * "^[a-zA-Z._-]+$"
   */
  pattern?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  roleExtension?: TemplateParameterSchemaRoleExtension;
  /**
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @example
   * demo
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      enum: 'enum',
      pattern: 'pattern',
      required: 'required',
      roleExtension: 'roleExtension',
      sensitive: 'sensitive',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'any',
      description: 'string',
      enum: { 'type': 'array', 'itemType': 'string' },
      pattern: 'string',
      required: 'boolean',
      roleExtension: TemplateParameterSchemaRoleExtension,
      sensitive: 'boolean',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enum)) {
      $dara.Model.validateArray(this.enum);
    }
    if(this.roleExtension && typeof (this.roleExtension as any).validate === 'function') {
      (this.roleExtension as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

