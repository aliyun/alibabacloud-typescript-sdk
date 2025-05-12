// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsersPasswordResponseBodyDesktopUsers } from "./DescribeUsersPasswordResponseBodyDesktopUsers";


export class DescribeUsersPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorized users of the cloud computer.
   */
  desktopUsers?: DescribeUsersPasswordResponseBodyDesktopUsers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F7B4B17B-5C8A-514C-AA4D-F8090E3A63E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopUsers: 'DesktopUsers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopUsers: { 'type': 'array', 'itemType': DescribeUsersPasswordResponseBodyDesktopUsers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopUsers)) {
      $dara.Model.validateArray(this.desktopUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

