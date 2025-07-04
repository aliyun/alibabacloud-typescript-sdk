// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesResponseBodyResultDatabasesTemplates extends $dara.Model {
  children?: any[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isDir?: number;
  /**
   * @example
   * c26_schema
   */
  name?: string;
  /**
   * @example
   * -1
   */
  parent?: number;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * @example
   * template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      instanceId: 'instanceId',
      isDir: 'isDir',
      name: 'name',
      parent: 'parent',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      id: 'number',
      instanceId: 'number',
      isDir: 'number',
      name: 'string',
      parent: 'number',
      templateId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

