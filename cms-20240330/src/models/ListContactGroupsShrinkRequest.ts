// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The contact group IDs.
   */
  contactGroupIdsShrink?: string;
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. The default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. The default is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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

