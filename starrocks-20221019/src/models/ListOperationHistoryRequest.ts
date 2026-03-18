// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHistoryRequest extends $dara.Model {
  /**
   * @example
   * 1742179008000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * op-f49743caa809****
   */
  operationId?: string;
  /**
   * @example
   * COMPLETED
   */
  operationStatus?: string;
  /**
   * @example
   * update_configuration
   */
  operationType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1742179008000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      operationId: 'OperationId',
      operationStatus: 'OperationStatus',
      operationType: 'OperationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      operationId: 'string',
      operationStatus: 'string',
      operationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

