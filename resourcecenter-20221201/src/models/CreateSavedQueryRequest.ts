// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavedQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * 查询所有资源。
   */
  description?: string;
  /**
   * @remarks
   * The expression of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM resources;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * - The name must be 1 to 64 characters in length.
   * 
   * - The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * - The template name must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 查询我的所有资源。
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

