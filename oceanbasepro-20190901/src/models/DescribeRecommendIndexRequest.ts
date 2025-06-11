// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The return result of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The index recommended for the SQL statement after calculation by the diagnostic system.   
   * - If the recommended index is the primary key, PRIMARY is returned.  
   * - If an index created by the user is recommended, the index name is returned.   
   * The system recommends only one index for an SQL statement. You can call the DescribeIndexes operation to view the indexes of a table.
   * 
   * This parameter is required.
   * 
   * @example
   * t2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      SQLId: 'SQLId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      SQLId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

