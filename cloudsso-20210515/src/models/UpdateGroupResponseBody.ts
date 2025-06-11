// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGroupResponseBodyGroup } from "./UpdateGroupResponseBodyGroup";


export class UpdateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the group.
   */
  group?: UpdateGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F723DE01-6276-5DC4-9B1F-9CBE3E1748B2
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
      group: UpdateGroupResponseBodyGroup,
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

