// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDPUtilizationDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the resource, such as ecsRi and scu_bag. If this parameter is specified, the ProdCode parameter does not take effect for the request.
   * 
   * @example
   * ecsRi
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the deducted instance. If this parameter is not specified, the details of all instances are returned.
   * 
   * @example
   * oss-123123
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query the resource plan usage of linked accounts. Valid values:
   * 
   * *   true: queries the resource plan usage of linked accounts.
   * *   false: does not query the resource plan usage of linked accounts.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  includeShare?: boolean;
  /**
   * @remarks
   * The ID of the instance to query. If this parameter is not specified, the details of all used instances are returned.
   * 
   * @example
   * oss-123123
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * Instancetyp
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. For the first query, set the value to null. For subsequent queries, set the value to the token that is obtained from the NextToken parameter.
   * 
   * @example
   * CAESF***zNTAw
   */
  lastToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The code of the service. Example: ecs.
   * 
   * @example
   * oss
   */
  prodCode?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      endTime: 'EndTime',
      includeShare: 'IncludeShare',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      lastToken: 'LastToken',
      limit: 'Limit',
      prodCode: 'ProdCode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deductedInstanceId: 'string',
      endTime: 'string',
      includeShare: 'boolean',
      instanceId: 'string',
      instanceSpec: 'string',
      lastToken: 'string',
      limit: 'number',
      prodCode: 'string',
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

