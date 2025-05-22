// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobRequestPartitionKey extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_day field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeDay?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_hour field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeHour?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_minute field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeMinute?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_month field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeMonth?: boolean;
  /**
   * @remarks
   * Specifies whether the incremental data table contains partitions defined by the modifytime_year field. Valid values: **true** and **false**.
   * 
   * >  This parameter is available only if the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute**.
   * 
   * @example
   * true
   */
  modifyTimeYear?: boolean;
  static names(): { [key: string]: string } {
    return {
      modifyTimeDay: 'ModifyTime_Day',
      modifyTimeHour: 'ModifyTime_Hour',
      modifyTimeMinute: 'ModifyTime_Minute',
      modifyTimeMonth: 'ModifyTime_Month',
      modifyTimeYear: 'ModifyTime_Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTimeDay: 'boolean',
      modifyTimeHour: 'boolean',
      modifyTimeMinute: 'boolean',
      modifyTimeMonth: 'boolean',
      modifyTimeYear: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

