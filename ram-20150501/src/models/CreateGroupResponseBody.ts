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
   * D3F0679E-9757-95DB-AF2D-04D5188C69C5
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

