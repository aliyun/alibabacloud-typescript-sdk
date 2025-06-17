// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillPredictionRequest extends $dara.Model {
  /**
   * @remarks
   * The billable region. Valid values:
   * 
   * *   **CN**: the Chinese mainland
   * *   **OverSeas**: outside the Chinese mainland
   * *   **AP1**: Asia Pacific 1
   * *   **AP2**: Asia Pacific 2
   * *   **AP3**: Asia Pacific 3
   * *   **NA**: North America
   * *   **SA**: South America
   * *   **EU**: Europe
   * *   **MEAA**: Middle East and Africa
   * 
   * By default, the value of this parameter is determined by the metering method that is currently used. Regions inside and outside the Chinese mainland are classified into the **CN** and **OverSeas** billable regions. Billable regions inside the Chinese mainland include **CN**. Billable regions outside the Chinese mainland include **AP1**, **AP2**, **AP3**, **NA**, **SA**, **EU**, and **MEAA**.
   * 
   * > For more information about billable regions, see [Billable regions](https://help.aliyun.com/document_detail/142221.html).
   * 
   * @example
   * CN,OverSeas
   */
  area?: string;
  /**
   * @remarks
   * The billable item. A value of flow specifies bandwidth.
   * 
   * @example
   * flow
   */
  dimension?: string;
  /**
   * @remarks
   * The end time of the estimation. The default value is the current time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2018-10-25T10:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the estimation. The default value is 00:00 on the first day of the current month. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      dimension: 'Dimension',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      dimension: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

