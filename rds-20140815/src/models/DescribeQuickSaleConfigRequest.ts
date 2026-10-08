// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuickSaleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * - rds: subscription
   * - bards: pay-as-you-go
   * 
   * @example
   * rds
   */
  commodity?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * * **MySQL**
   * * **SQLServer**
   * * **PostgreSQL**
   * * **MariaDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the available regions.
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

