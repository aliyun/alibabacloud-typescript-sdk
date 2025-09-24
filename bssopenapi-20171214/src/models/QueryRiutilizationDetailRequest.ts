// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRIUtilizationDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance whose fees are deducted by using the RI. If this parameter is left empty, the usage details of all instances are queried.
   * 
   * @example
   * jsdgfsdhgsdjh
   */
  deductedInstanceId?: string;
  /**
   * @remarks
   * The time when the RI expires. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The instance type of the RI.
   * 
   * @example
   * Instancetyp
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service to which the RI is applied. Default value: ecsRi. Valid values:
   * 
   * *   ecsRi: ECS RI.
   * *   scu_bag: storage capacity unit (SCU).
   * 
   * This parameter is required.
   * 
   * @example
   * ecsRi
   */
  RICommodityCode?: string;
  /**
   * @remarks
   * The ID of the RI. If this parameter is left empty, the usage details of all RIs are queried.
   * 
   * @example
   * dsudfgdsjh
   */
  RIInstanceId?: string;
  /**
   * @remarks
   * The time when the RI was created. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-23 12:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      deductedInstanceId: 'DeductedInstanceId',
      endTime: 'EndTime',
      instanceSpec: 'InstanceSpec',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      RICommodityCode: 'RICommodityCode',
      RIInstanceId: 'RIInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductedInstanceId: 'string',
      endTime: 'string',
      instanceSpec: 'string',
      pageNum: 'number',
      pageSize: 'number',
      RICommodityCode: 'string',
      RIInstanceId: 'string',
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

