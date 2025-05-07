// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic start and stop feature is enabled for the serverless instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is automatically resumed.
   * 
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The maximum number of RCUs.
   * 
   * @example
   * 8
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum number of RDS Capacity Units (RCUs).
   * 
   * @example
   * 0.5
   */
  scaleMin?: number;
  /**
   * @remarks
   * Indicates whether the forced scaling feature is enabled for the serverless instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  In most cases, ApsaraDB RDS automatically scales in or out the RCUs of a serverless instance based on business requirements in real time. In rare cases, the scaling does not take effect in real time. You can enable the forced scaling feature to forcefully scales in or out the RCUs of the instance.
   * 
   * @example
   * false
   */
  switchForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPause: 'AutoPause',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      switchForce: 'SwitchForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPause: 'boolean',
      scaleMax: 'number',
      scaleMin: 'number',
      switchForce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

