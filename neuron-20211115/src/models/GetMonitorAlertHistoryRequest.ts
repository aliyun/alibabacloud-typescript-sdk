// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonitorAlertHistoryRequest extends $dara.Model {
  alertRuleName?: string;
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  env?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  pbcId?: number;
  serviceGroupId?: number;
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleName: 'alertRuleName',
      endTime: 'endTime',
      env: 'env',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcId: 'pbcId',
      serviceGroupId: 'serviceGroupId',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleName: 'string',
      endTime: 'string',
      env: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pbcId: 'number',
      serviceGroupId: 'number',
      startTime: 'string',
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

