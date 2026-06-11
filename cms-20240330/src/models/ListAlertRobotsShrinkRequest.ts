// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRobotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the robot. Fuzzy search by prefix is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 100.
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
   * The robot types.
   */
  typesShrink?: string;
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

