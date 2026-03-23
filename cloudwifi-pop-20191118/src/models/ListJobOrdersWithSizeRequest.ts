// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobOrdersWithSizeRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  changingType?: string;
  clientSystem?: string;
  clientUniqueId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cursor?: number;
  endTime?: string;
  handler?: string;
  id?: string;
  orderStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  startTime?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      changingType: 'ChangingType',
      clientSystem: 'ClientSystem',
      clientUniqueId: 'ClientUniqueId',
      cursor: 'Cursor',
      endTime: 'EndTime',
      handler: 'Handler',
      id: 'Id',
      orderStatus: 'OrderStatus',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      changingType: 'string',
      clientSystem: 'string',
      clientUniqueId: 'string',
      cursor: 'number',
      endTime: 'string',
      handler: 'string',
      id: 'string',
      orderStatus: 'string',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

