// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoIncrementUsageStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The database name. If you specify a database, the operation queries the usage of auto-increment table IDs in the specified database. Otherwise, the operation queries the usage of auto-increment table IDs in all databases on the instance.
   * 
   * >  Specify the parameter value as a JSON array, such as [\\"db1\\",\\"db2\\"]. Separate multiple database names with commas (,).
   * 
   * @example
   * [\\"db1\\",\\"db2\\"]
   */
  dbNames?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The usage threshold of auto-increment IDs. Only usage that exceeds the threshold can be returned. Valid values are decimals that range from 0 to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.9
   */
  ratioFilter?: number;
  /**
   * @remarks
   * Specifies whether to query real-time data. Valid values:
   * 
   * *   **true**: queries data in real time except for data generated in the last 10 minutes.****
   * *   **false**: queries data generated in the last 2 hours. If no such data exists, queries the latest data.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  realTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbNames: 'DbNames',
      instanceId: 'InstanceId',
      ratioFilter: 'RatioFilter',
      realTime: 'RealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNames: 'string',
      instanceId: 'string',
      ratioFilter: 'number',
      realTime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

