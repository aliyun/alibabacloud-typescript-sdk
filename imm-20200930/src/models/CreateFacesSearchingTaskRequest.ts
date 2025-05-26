// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";
import { CreateFacesSearchingTaskRequestSources } from "./CreateFacesSearchingTaskRequestSources";


export class CreateFacesSearchingTaskRequest extends $dara.Model {
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
  notification?: Notification;
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
  sources?: CreateFacesSearchingTaskRequestSources[];
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
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResult: 'number',
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateFacesSearchingTaskRequestSources },
      userData: 'string',
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

