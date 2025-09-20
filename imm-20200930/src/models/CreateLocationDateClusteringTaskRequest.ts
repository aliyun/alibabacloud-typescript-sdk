// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";


export class CreateLocationDateClusteringTaskRequestDateOptions extends $dara.Model {
  /**
   * @remarks
   * The maximum number of days allowed in a gap for a single spatiotemporal cluster. Valid values: 0 to 99999.
   * 
   * For example, if travel photos were produced on March 4, 5, and 7, 2024, but not on Marh 6, 2024, and you set the parameter to 1, IMM considers the travel spanning the date range from March 4, 2024 to March 7, 2024 and includes photos within the data range in the same cluster.````
   * 
   * We recommend that you set the parameter to a value within the range from 0 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  gapDays?: number;
  /**
   * @remarks
   * The maximum number of days that a single spatiotemporal cluster can span. Valid values: 1 to 99999. IMM does not create a cluster that spans more than the maximum number of days.
   * 
   * For example, if you want to create travel photo clusters, you may want to exclude photos that were taken within 15 consecutive days in the same city, because it is likely that these photos were not taken during a travel. In this case, you can set the parameter to 15 to exclude this time range and location from the clustering task.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  maxDays?: number;
  /**
   * @remarks
   * The minimum number of days that a single spatiotemporal cluster can span. Valid values: 1 to 99999. IMM does not create a cluster that spans less than the minimum number of days.
   * 
   * For example, if you do not want a one-day tour cluster, you can set the parameter to 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minDays?: number;
  static names(): { [key: string]: string } {
    return {
      gapDays: 'GapDays',
      maxDays: 'MaxDays',
      minDays: 'MinDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gapDays: 'number',
      maxDays: 'number',
      minDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskRequestLocationOptions extends $dara.Model {
  /**
   * @remarks
   * The administrative division levels. You can specify multiple administrative division levels.
   * 
   * For example, you uploaded photos that were taken from March 3, 2024 to March 5, 2024 in Hangzhou and photos that were taken from March 6, 2024 to March 8, 2024 in Jiaxing. When you call the operation and set the parameter to `["city", "province"]`, the following spatiotemporal clusters are created from these photos:
   * 
   * *   March 3, 2024 to March 5, 2024, Hangzhou
   * *   March 6, 2024 to March 8, 2024, Jiaxing
   * *   March 3, 2024 to March 8, 2024, Zhejiang
   * 
   * This parameter is required.
   */
  locationDateClusterLevels?: string[];
  static names(): { [key: string]: string } {
    return {
      locationDateClusterLevels: 'LocationDateClusterLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDateClusterLevels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationDateClusterLevels)) {
      $dara.Model.validateArray(this.locationDateClusterLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

