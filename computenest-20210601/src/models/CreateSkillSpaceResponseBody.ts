// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillSpaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the skill space.
   * 
   * @example
   * ss-11111
   */
  skillSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skillSpaceId: 'SkillSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skillSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

