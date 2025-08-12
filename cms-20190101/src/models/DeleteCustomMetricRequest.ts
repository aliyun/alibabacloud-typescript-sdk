// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The MD5 value of the HTTP request body. The MD5 value is a 128-bit hash value used to verify the uniqueness of the reported monitoring data.
   * 
   * >  `Md5` is returned when you query the reported monitoring data of a metric.
   * 
   * @example
   * 38796C8CFFEB8F89BB2A626C7BD7****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * This parameter is required.
   * 
   * @example
   * AdvanceCredit
   */
  metricName?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the request for reporting monitoring data.
   * 
   * >  `UUID` is returned when you query the reported monitoring data of a metric. We recommend that you specify the `Md5` parameter.
   * 
   * @example
   * 5497633c-66c5-4eae-abaa-89db5adb****
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      regionId: 'RegionId',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      regionId: 'string',
      UUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

