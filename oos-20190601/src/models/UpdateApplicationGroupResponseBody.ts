// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApplicationGroupResponseBodyApplicationGroup } from "./UpdateApplicationGroupResponseBodyApplicationGroup";


export class UpdateApplicationGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application group.
   */
  applicationGroup?: UpdateApplicationGroupResponseBodyApplicationGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA9FA778-AE4B-55EC-81CC-C46BAF08A166
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
      applicationGroup: UpdateApplicationGroupResponseBodyApplicationGroup,
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

