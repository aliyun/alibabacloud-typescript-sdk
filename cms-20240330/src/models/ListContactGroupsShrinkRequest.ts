// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the contact groups.
   */
  contactGroupIdsShrink?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * default-cms-xxxxxx-cn-beijing
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIdsShrink: 'contactGroupIds',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIdsShrink: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

