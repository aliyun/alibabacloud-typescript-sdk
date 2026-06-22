// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Notification } from "./Notification";


export class CreateLocationDateClusteringTaskRequestDateOptions extends $dara.Model {
  /**
   * @remarks
   * The maximum number of gap days allowed in a single spatio-temporal group. The value must be in the range of 0 to 99,999.
   * 
   * For example, a user has photos from March 4–5 and March 7, but not from March 6. If you assume that the photos from March 4–7 belong to the same trip, set this parameter to `1 day`. This allows the gap of `1 day` on March 6 to be included in the same spatio-temporal cluster.
   * 
   * Set this parameter to a value from 0 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  gapDays?: number;
  /**
   * @remarks
   * The maximum number of days in a single spatio-temporal group. The value must be in the range of 1 to 99,999. Clusters with more days than this value are not detected or stored.
   * 
   * For example, if a user takes photos in the same location for more than 15 consecutive days, this location might be their residence rather than a travel destination. If you want to exclude this time period and location from the spatio-temporal clusters, set this parameter to 15.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  maxDays?: number;
  /**
   * @remarks
   * The minimum number of days in a single spatio-temporal group. The value must be in the range of 1 to 99,999. Clusters with fewer days than this value are not detected or stored.
   * 
   * For example, if you do not want to include one-day trips in the generated groups, set this parameter to 2.
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
   * A list of administrative levels for grouping. You can select multiple levels.
   * 
   * For example, a user uploads photos taken in Hangzhou from March 3 to March 5 and photos taken in Jiaxing from March 6 to March 8. If you set this parameter to `["city", "province"]`, the following spatio-temporal clusters are generated:
   * 
   * - March 3 to March 5, Hangzhou
   * 
   * - March 6 to March 8, Jiaxing
   * 
   * - March 3 to March 8, Zhejiang
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
  dateOptions?: CreateLocationDateClusteringTaskRequestDateOptions;
  /**
   * @remarks
   * The location clustering settings.
   * >Notice: Modifying this setting also affects existing spatio-temporal clusters in your `Dataset`.
   * 
   * This parameter is required.
   */
  locationOptions?: CreateLocationDateClusteringTaskRequestLocationOptions;
  /**
   * @remarks
   * The message notification configuration. For more information, see Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
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
  tags?: { [key: string]: any };
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

