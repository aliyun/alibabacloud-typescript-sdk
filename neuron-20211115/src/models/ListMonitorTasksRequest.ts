// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMonitorTasksRequest extends $dara.Model {
  /**
   * @example
   * alert
   */
  alertName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
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
   * 2
   */
  pbcId?: string;
  serviceGroupId?: string;
  /**
   * @example
   * SLS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'alertName',
      env: 'env',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcId: 'pbcId',
      serviceGroupId: 'serviceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      env: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pbcId: 'string',
      serviceGroupId: 'string',
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

