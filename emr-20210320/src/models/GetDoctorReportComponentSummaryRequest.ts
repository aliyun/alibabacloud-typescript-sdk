// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorReportComponentSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * Select component filter type. Values: 
   * - compute 
   * - hive
   * - hdfs
   * - yarn
   * - oss
   * - hbase
   * 
   * This parameter is required.
   * 
   * @example
   * compute
   */
  componentType?: string;
  /**
   * @remarks
   * Report date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      componentType: 'ComponentType',
      dateTime: 'DateTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      componentType: 'string',
      dateTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

