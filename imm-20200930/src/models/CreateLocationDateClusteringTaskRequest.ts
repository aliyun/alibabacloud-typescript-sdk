// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLocationDateClusteringTaskRequestDateOptions } from "./CreateLocationDateClusteringTaskRequestDateOptions";
import { CreateLocationDateClusteringTaskRequestLocationOptions } from "./CreateLocationDateClusteringTaskRequestLocationOptions";
import { Notification } from "./Notification";


export class CreateLocationDateClusteringTaskRequest extends $dara.Model {
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
   * The date configurations for clustering.
   * 
   * >  Adjusting these configurations affects existing spatiotemporal clusters for the dataset.
   * 
   * This parameter is required.
   */
  dateOptions?: CreateLocationDateClusteringTaskRequestDateOptions;
  /**
   * @remarks
   * The geolocation configurations for clustering.
   * 
   * >  Adjusting these configurations affects existing spatiotemporal clusters for the dataset.
   * 
   * This parameter is required.
   */
  locationOptions?: CreateLocationDateClusteringTaskRequestLocationOptions;
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
   * The custom tags. You can search for or filter asynchronous tasks by custom tag.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the value is 2,048 bytes.
   * 
   * @example
   * test-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      dateOptions: 'DateOptions',
      locationOptions: 'LocationOptions',
      notification: 'Notification',
      projectName: 'ProjectName',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      dateOptions: CreateLocationDateClusteringTaskRequestDateOptions,
      locationOptions: CreateLocationDateClusteringTaskRequestLocationOptions,
      notification: Notification,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  validate() {
    if(this.dateOptions && typeof (this.dateOptions as any).validate === 'function') {
      (this.dateOptions as any).validate();
    }
    if(this.locationOptions && typeof (this.locationOptions as any).validate === 'function') {
      (this.locationOptions as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

