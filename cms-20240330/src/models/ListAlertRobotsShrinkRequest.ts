// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRobotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The robot name. Prefix fuzzy match is supported.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The robot IDs.
   */
  robotIdsShrink?: string;
  /**
   * @remarks
   * The robot type.
   */
  typesShrink?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * default-cms-1423134313712421-cn-shanghai
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      robotIdsShrink: 'robotIds',
      typesShrink: 'types',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      robotIdsShrink: 'string',
      typesShrink: 'string',
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

