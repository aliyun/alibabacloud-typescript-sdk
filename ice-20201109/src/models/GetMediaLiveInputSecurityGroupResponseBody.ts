// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaLiveInputSecurityGroupResponseBodySecurityGroup } from "./GetMediaLiveInputSecurityGroupResponseBodySecurityGroup";


export class GetMediaLiveInputSecurityGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The security group information.
   */
  securityGroup?: GetMediaLiveInputSecurityGroupResponseBodySecurityGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroup: GetMediaLiveInputSecurityGroupResponseBodySecurityGroup,
    };
  }

  validate() {
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

