// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLocationDateClusteringTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset name. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The date clustering settings.
   * >Notice: Modifying this setting also affects existing spatio-temporal clusters in your `Dataset`.
   * 
   * This parameter is required.
   */
  dateOptionsShrink?: string;
  /**
   * @remarks
   * The location clustering settings.
   * >Notice: Modifying this setting also affects existing spatio-temporal clusters in your `Dataset`.
   * 
   * This parameter is required.
   */
  locationOptionsShrink?: string;
  /**
   * @remarks
   * The message notification configuration. For more information, see Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * Custom information that is returned in the asynchronous notification message. This helps you associate the notification message with your system. The maximum length is 2,048 bytes.
   * 
   * @example
   * test-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      dateOptionsShrink: 'DateOptions',
      locationOptionsShrink: 'LocationOptions',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      dateOptionsShrink: 'string',
      locationOptionsShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
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

