// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes } from "./DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes";


export class DescribeInstanceMaintenanceAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maintenance attributes.
   */
  maintenanceAttributes?: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried maintenance attributes.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maintenanceAttributes: 'MaintenanceAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenanceAttributes: DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.maintenanceAttributes && typeof (this.maintenanceAttributes as any).validate === 'function') {
      (this.maintenanceAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

