// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the follower. You can call the [GetQualityFollower](https://help.aliyun.com/document_detail/174000.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  followerId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log in to the DataWorks console and go to the Workspace Management page to obtain the workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source where the partition expression is located. You can log in to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Data Quality page to obtain the name.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      followerId: 'FollowerId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      followerId: 'number',
      projectId: 'number',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

