// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchIndexFileMetaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.[](~~478160~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The objects in Object Storage Service (OSS). Specify OSS objects by using a JSON array. You can specify up to 100 objects in an array.
   * 
   * This parameter is required.
   */
  filesShrink?: string;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
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

