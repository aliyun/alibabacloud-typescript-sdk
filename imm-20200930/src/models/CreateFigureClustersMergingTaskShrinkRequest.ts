// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFigureClustersMergingTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dataset001
   */
  datasetName?: string;
  /**
   * @remarks
   * The ID of the source group. You must specify either From or Froms, but not both.
   * 
   * @example
   * Cluster-2ab85905-23ba-4632-b2d8-1c21cfe****
   */
  from?: string;
  /**
   * @remarks
   * The IDs of source clustering groups. You must specify either From or Froms, but not both. You can specify up to 100 task IDs.
   */
  fromsShrink?: string;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The custom tags, which can be used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"key":"val"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The ID of the destination clustering group.
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster-4a3a71c1-c092-4788-8826-2f65d17****
   */
  to?: string;
  /**
   * @remarks
   * The custom data, which is returned in an asynchronous notification and facilitates notification management. The maximum length is 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      from: 'From',
      fromsShrink: 'Froms',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
      to: 'To',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      from: 'string',
      fromsShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
      to: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

