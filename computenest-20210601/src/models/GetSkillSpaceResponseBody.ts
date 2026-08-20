// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillSpaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the SkillSpace was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The SkillSpace description.
   * 
   * @example
   * All-in-one office toolkit — generate reports, process data, manage files, and streamline workflows effortlessly.
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * SkillSpace ID
   * 
   * @example
   * ss-xxxxx
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The SkillSpace name.
   * 
   * @example
   * office-toolkit-skills
   */
  skillSpaceName?: string;
  /**
   * @remarks
   * The time when the SkillSpace was last updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      requestId: 'RequestId',
      skillSpaceDescription: 'SkillSpaceDescription',
      skillSpaceId: 'SkillSpaceId',
      skillSpaceName: 'SkillSpaceName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      requestId: 'string',
      skillSpaceDescription: 'string',
      skillSpaceId: 'string',
      skillSpaceName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

