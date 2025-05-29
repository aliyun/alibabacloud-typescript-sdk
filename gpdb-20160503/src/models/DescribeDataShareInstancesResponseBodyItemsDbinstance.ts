// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataShareInstancesResponseBodyItemsDBInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The resource type of the instance. Valid values:
   * 
   * *   **Serverless**: Serverless mode
   * *   **StorageElasic**: elastic storage mode
   * *   **Classic**: reserved storage mode
   * 
   * @example
   * Serverless
   */
  DBInstanceMode?: string;
  /**
   * @remarks
   * The state of data sharing. Valid values:
   * 
   * *   **opening**: Data sharing is being enabled.
   * *   **opened**: Data sharing is enabled.
   * *   **closing**: Data sharing is being disabled.
   * *   **closed**: Data sharing is disabled.
   * 
   * @example
   * opened
   */
  dataShareStatus?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * gp-bp***************
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceMode: 'DBInstanceMode',
      dataShareStatus: 'DataShareStatus',
      description: 'Description',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceMode: 'string',
      dataShareStatus: 'string',
      description: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

