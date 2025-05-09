// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataCronClearOrderRequestParamCronClearItemList } from "./CreateDataCronClearOrderRequestParamCronClearItemList";
import { CreateDataCronClearOrderRequestParamDbItemList } from "./CreateDataCronClearOrderRequestParamDbItemList";


export class CreateDataCronClearOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The reason for the data change.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The tables for which you want to clear historical data.
   * 
   * This parameter is required.
   */
  cronClearItemList?: CreateDataCronClearOrderRequestParamCronClearItemList[];
  /**
   * @remarks
   * The crontab expression that you can use to run the task at a specified time. For more information, see [Crontab expression](https://help.aliyun.com/document_detail/206581.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronFormat?: string;
  /**
   * @remarks
   * The databases for which you want to clear historical data.
   * 
   * This parameter is required.
   */
  dbItemList?: CreateDataCronClearOrderRequestParamDbItemList[];
  /**
   * @remarks
   * The amount of time taken to run the task. Unit: hours.
   * 
   * >  If the **specifyDuration** parameter is set to **true**, this parameter is required.
   * 
   * @example
   * 4
   */
  durationHour?: number;
  /**
   * @remarks
   * Specifies whether to specify an end time for the task. Valid values:
   * 
   * *   **true**: specifies an end time for the task. The task is automatically suspended after this end time.
   * *   **false**: does not specify an end time for the task. The task is stopped after the historical data is cleared.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  specifyDuration?: boolean;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      cronClearItemList: 'CronClearItemList',
      cronFormat: 'CronFormat',
      dbItemList: 'DbItemList',
      durationHour: 'DurationHour',
      specifyDuration: 'specifyDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      cronClearItemList: { 'type': 'array', 'itemType': CreateDataCronClearOrderRequestParamCronClearItemList },
      cronFormat: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateDataCronClearOrderRequestParamDbItemList },
      durationHour: 'number',
      specifyDuration: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cronClearItemList)) {
      $dara.Model.validateArray(this.cronClearItemList);
    }
    if(Array.isArray(this.dbItemList)) {
      $dara.Model.validateArray(this.dbItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

