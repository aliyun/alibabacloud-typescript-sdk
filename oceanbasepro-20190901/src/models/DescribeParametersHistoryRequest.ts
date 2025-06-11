// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the parameter.    
   * Valid values: CLUSTER and TENANT.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT
   */
  dimension?: string;
  /**
   * @remarks
   * The resource ID of the parameter type.   
   * You can leave this parameter unspecified when you call this operation to query cluster parameters. In the case of tenant parameters, pass the tenant ID.
   * 
   * @example
   * t4qx8****
   */
  dimensionValue?: string;
  /**
   * @remarks
   * The end time of the time range for querying the SQL execution history.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-13 15:40:43
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.    
   * - Start value: 1   
   * - Default value: 1
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows to return on each page.   
   * - Maximum value: 100.
   * - Default value: 10
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of querying the slow query execution.
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-13 15:40:43
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionValue: 'DimensionValue',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionValue: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

