// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $dara.Model {
  /**
   * @remarks
   * The availability of the instance. Valid values:
   * 
   * *   **Unavailable**
   * *   **Available**
   * 
   * @example
   * Unavailable
   */
  availability?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   **Master**: primary instance
   * *   **Readonly**: read-only instance
   * 
   * @example
   * Master
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The weight of the instance.
   * 
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      availability: 'Availability',
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availability: 'string',
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

