// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateGroupResponseBodyGroup } from "./CreateGroupResponseBodyGroup";


export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the group.
   */
  group?: CreateGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20E9650E-EC23-593E-933F-EA0D280D040C
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
      group: CreateGroupResponseBodyGroup,
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

