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

export class DescribeDataShareInstancesResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDataShareInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDataShareInstancesResponseBodyItemsDBInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstance)) {
      $dara.Model.validateArray(this.DBInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataShareInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The state of data sharing. Valid values:
   * 
   * *   **opening**
   * *   **opened**
   * *   **closing**
   * *   **closed**
   */
  items?: DescribeDataShareInstancesResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D5**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDataShareInstancesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

