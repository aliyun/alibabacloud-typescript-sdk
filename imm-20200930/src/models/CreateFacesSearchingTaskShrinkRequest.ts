// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFacesSearchingTaskShrinkRequest extends $dara.Model {
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
   * The number of the most similar faces that you want to return. Valid values: 1 to 100. Default value: 5.
   * 
   * @example
   * 100
   */
  maxResult?: number;
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
  /**
   * @remarks
   * The images.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the value is 2,048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResult: 'MaxResult',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResult: 'number',
      notificationShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
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

