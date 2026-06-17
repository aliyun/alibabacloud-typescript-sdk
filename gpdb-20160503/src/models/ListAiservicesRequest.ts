// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for PostgreSQL instance.
   * 
   * > To view details of all AnalyticDB for PostgreSQL instances in a region, including their instance IDs, call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - 20
   * 
   * - 50
   * 
   * - 100
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The type of the AI service. Valid value: drama.
   * 
   * This parameter is required.
   * 
   * @example
   * drama
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

