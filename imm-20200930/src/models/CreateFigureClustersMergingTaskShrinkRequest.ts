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
   * The ID of the source clustering group. You must specify a value for either \\`From\\` or \\`Froms\\`. You cannot specify values for both parameters.
   * 
   * @example
   * Cluster-2ab85905-23ba-4632-b2d8-1c21cfe****
   */
  from?: string;
  /**
   * @remarks
   * A list of the IDs of the source clustering groups. You must specify a value for either \\`From\\` or \\`Froms\\`. You cannot specify values for both parameters. The list can contain up to 100 IDs.
   */
  fromsShrink?: string;
  /**
   * @remarks
   * The configuration of the notification message. For more information, click Notification. For more information about the format of an asynchronous notification message, see [Asynchronous notification messages](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The custom tags. You can use custom tags to search for and filter asynchronous tasks.
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
   * The custom information. This information is returned in the asynchronous notification message to help you associate the message with your system. The value can be up to 2,048 bytes in length.
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

