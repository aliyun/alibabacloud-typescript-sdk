// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationGroupResponseBodyApplicationGroup } from "./GetApplicationGroupResponseBodyApplicationGroup";


export class GetApplicationGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: GetApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 92EA60ED-544D-55E9-93D9-237BE9976C0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: GetApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationGroup && typeof (this.applicationGroup as any).validate === 'function') {
      (this.applicationGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

