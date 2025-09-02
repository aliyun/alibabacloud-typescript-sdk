// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the subscription relationship between the partition filter expression and the subscriber. You can call the [GetQualityFollower](https://help.aliyun.com/document_detail/174000.html) operation to obtain the ID of the subscription relationship.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  followerId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to obtain the workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine or data source for which the partition filter expression is configured. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the rule configuration page of Data Quality page to obtain the name.
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

