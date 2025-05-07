// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuickSaleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   rds: The instance is a subscription instance.
   * *   bards: The instance is a pay-as-you-go instance.
   * 
   * @example
   * rds
   */
  commodity?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **MariaDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      engine: 'Engine',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: 'string',
      engine: 'string',
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

