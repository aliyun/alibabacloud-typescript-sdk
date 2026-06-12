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
   * The ID of the request.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The description of the SkillSpace.
   * 
   * @example
   * 1111111
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * The ID of the SkillSpace.
   * 
   * @example
   * ss-11111
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The name of the SkillSpace.
   * 
   * @example
   * 1111111
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

