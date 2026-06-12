// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SkillSpace.
   * 
   * This parameter is required.
   * 
   * @example
   * ss-11111
   */
  skillSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      skillSpaceId: 'SkillSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

