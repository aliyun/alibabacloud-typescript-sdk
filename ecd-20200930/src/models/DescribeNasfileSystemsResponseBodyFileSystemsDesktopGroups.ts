// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASFileSystemsResponseBodyFileSystemsDesktopGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-9eeyf15b25nyl****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share.
   * 
   * @example
   * test_dg
   */
  desktopGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

