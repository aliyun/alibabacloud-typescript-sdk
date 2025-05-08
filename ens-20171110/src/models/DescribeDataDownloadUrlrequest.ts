// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDownloadURLRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d9143f0
   */
  appId?: string;
  /**
   * @remarks
   * The name of the data file.
   * 
   * This parameter is required.
   * 
   * @example
   * mirror_file/pk-1642597182026-878199448832413.tar
   */
  dataName?: string;
  /**
   * @remarks
   * The version number of the data file.
   * 
   * This parameter is required.
   * 
   * @example
   * 7895
   */
  dataVersion?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 600
   */
  expireTimeout?: number;
  /**
   * @remarks
   * The condition that you want to use to filter file servers. You can specify multiple canary release policies. By default, all resources are queried.
   * 
   * @example
   * {\\"name\\": \\"ScheduleToRegionId\\",\\"parameters\\":{\\"operator\\": \\"In\\",\\"values\\": [\\"cn-shijiazhuang-telecom_unicom_cmcc\\"]}}
   */
  serverFilterStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataName: 'DataName',
      dataVersion: 'DataVersion',
      expireTimeout: 'ExpireTimeout',
      serverFilterStrategy: 'ServerFilterStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataName: 'string',
      dataVersion: 'string',
      expireTimeout: 'number',
      serverFilterStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

