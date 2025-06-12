// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGroupResponseBodyGroup } from "./GetGroupResponseBodyGroup";


export class GetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the RAM user group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4065824-E422-3ED6-68B1-1AF7D5C7804C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

