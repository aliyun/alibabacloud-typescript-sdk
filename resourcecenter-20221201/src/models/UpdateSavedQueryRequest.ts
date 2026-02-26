// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSavedQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * 查询我的所有资源，返回所有的列。
   */
  description?: string;
  /**
   * @remarks
   * The expression of the template.
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
   * - It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * - It must be globally unique.
   * 
   * @example
   * 查询我的所有资源。
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * cq-GeAck****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      name: 'string',
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

