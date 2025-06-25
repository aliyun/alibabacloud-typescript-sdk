// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHostGroupResponseBodyHostGroup } from "./GetHostGroupResponseBodyHostGroup";


export class GetHostGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned detailed information about the asset group.
   */
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: GetHostGroupResponseBodyHostGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.hostGroup && typeof (this.hostGroup as any).validate === 'function') {
      (this.hostGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

