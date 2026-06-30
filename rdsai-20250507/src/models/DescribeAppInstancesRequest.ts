// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The application type. The only supported value is **supabase**, which indicates [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html).
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * The ID of an RDS PostgreSQL instance to return only the associated AI application instances.
   * 
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The page number of the results to return. The value must be greater than 0.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of AI application instances to return on each page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      DBInstanceName: 'DBInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      DBInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

