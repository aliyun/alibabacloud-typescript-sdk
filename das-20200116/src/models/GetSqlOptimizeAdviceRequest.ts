// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlOptimizeAdviceRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The end date of the query. Format: <i>yyyyMMdd</i> (UTC).
   * 
   * - If this parameter is left empty, the default value is the day before the current date.
   * - You can only query data from the day before the current date or earlier. The interval between the start date and the end date cannot exceed 30 days.
   * 
   * @example
   * 20210917
   */
  endDt?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**: RDS MySQL.
   * - **PolarDBMySQL**: PolarDB for MySQL.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance ID.
   * >Only RDS MySQL and PolarDB for MySQL instances are supported.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region to which the instance belongs. Valid values:
   * 
   * - **cn-china**: the Chinese mainland.
   * - **cn-hongkong**: Hong Kong (China).
   * - **ap-southeast-1**: Singapore.
   * 
   * This parameter takes effect only when the **InstanceIds** request parameter is left empty. If **InstanceIds** is left empty, data is retrieved based on the region specified by the **Region** parameter. The default region is **cn-china**. If **InstanceIds** is not empty, data is retrieved based on the region of the first instance specified by **InstanceIds**, even if the **Region** parameter is set.
   * 
   * > For instances created in regions within the Chinese mainland, set this parameter to **cn-china**.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The start date of the query. Format: <i>yyyyMMdd</i> (UTC).
   * 
   * - If this parameter is left empty, the default value is the day before the current date.
   * - You can only query data from the day before the current date or earlier.
   * 
   * @example
   * 20210916
   */
  startDt?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      endDt: 'EndDt',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      startDt: 'StartDt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      endDt: 'string',
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      startDt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

