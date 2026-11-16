// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  /**
   * @remarks
   * The Yike user IDs to be added. Separate multiple IDs with commas. The users must belong to the current Alibaba Cloud account. By default, the Edit permission is granted.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001,10002
   */
  yikeUserIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      yikeUserIds: 'YikeUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      yikeUserIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

