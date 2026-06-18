// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatRecordDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Unique ID for the customer request. Used for idempotency validation. You can generate it using UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Right boundary of the time range for session end time. Format: UNIX timestamp in milliseconds.
   * 
   * @example
   * 1614582000000
   */
  closeTimeEnd?: number;
  /**
   * @remarks
   * Left boundary of the time range for session end time. Format: UNIX timestamp in milliseconds.
   * 
   * @example
   * 1614578400000
   */
  closeTimeStart?: number;
  /**
   * @remarks
   * Current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * Page size. Default value: **500**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

