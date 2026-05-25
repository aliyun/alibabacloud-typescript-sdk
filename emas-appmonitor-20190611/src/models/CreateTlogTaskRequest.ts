// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTlogTaskRequest extends $dara.Model {
  /**
   * @example
   * 20000000
   */
  aliYunCurrentPk?: string;
  /**
   * @example
   * 20000000
   */
  aliYunMainPk?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * emas_user
   */
  aliYunName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @example
   * 1778860800000
   */
  beginDate?: number;
  /**
   * @example
   * Redmi
   */
  brand?: string;
  city?: string;
  /**
   * @example
   * temp
   */
  clusterId?: string;
  /**
   * @example
   * 10
   */
  collectionNums?: number;
  /**
   * @example
   * 1
   */
  days?: string;
  deviceJson?: string;
  /**
   * @example
   * 1779465599999
   */
  endDate?: number;
  /**
   * @example
   * temp
   */
  errorType?: string;
  /**
   * @example
   * iPhone16
   */
  model?: string;
  /**
   * @example
   * {"First":true,"Completed":true,"NotifyPhone":true,"NotifyEmail":true,"NotifyWebhook":true,"ContactGroupIds":[1]}
   */
  notifySettingJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @example
   * 1.0.0
   */
  osVersion?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      aliYunCurrentPk: 'AliYunCurrentPk',
      aliYunMainPk: 'AliYunMainPk',
      aliYunName: 'AliYunName',
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      beginDate: 'BeginDate',
      brand: 'Brand',
      city: 'City',
      clusterId: 'ClusterId',
      collectionNums: 'CollectionNums',
      days: 'Days',
      deviceJson: 'DeviceJson',
      endDate: 'EndDate',
      errorType: 'ErrorType',
      model: 'Model',
      notifySettingJson: 'NotifySettingJson',
      os: 'Os',
      osVersion: 'OsVersion',
      sourceType: 'SourceType',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliYunCurrentPk: 'string',
      aliYunMainPk: 'string',
      aliYunName: 'string',
      appKey: 'number',
      appVersion: 'string',
      beginDate: 'number',
      brand: 'string',
      city: 'string',
      clusterId: 'string',
      collectionNums: 'number',
      days: 'string',
      deviceJson: 'string',
      endDate: 'number',
      errorType: 'string',
      model: 'string',
      notifySettingJson: 'string',
      os: 'string',
      osVersion: 'string',
      sourceType: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

