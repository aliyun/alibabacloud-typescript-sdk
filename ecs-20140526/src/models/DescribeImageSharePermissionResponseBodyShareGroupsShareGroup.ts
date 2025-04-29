// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSharePermissionResponseBodyShareGroupsShareGroup extends $dara.Model {
  /**
   * @remarks
   * The shared group.
   * 
   * @example
   * all
   */
  group?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

