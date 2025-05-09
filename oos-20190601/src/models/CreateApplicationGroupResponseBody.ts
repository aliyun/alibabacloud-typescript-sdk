// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApplicationGroupResponseBodyApplicationGroup } from "./CreateApplicationGroupResponseBodyApplicationGroup";


export class CreateApplicationGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: CreateApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0E6BEBD3-7F9E-5878-834B-097633AB5F33
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
      applicationGroup: CreateApplicationGroupResponseBodyApplicationGroup,
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

