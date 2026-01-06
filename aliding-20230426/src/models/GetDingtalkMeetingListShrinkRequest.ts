// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingListShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1732953600000
   */
  endTime?: number;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123456789
   */
  roomCode?: string;
  /**
   * @example
   * 会议室A
   */
  roomName?: string;
  /**
   * @example
   * 1732867200000
   */
  startTime?: number;
  /**
   * @example
   * 34343
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      currentPage: 'currentPage',
      endTime: 'endTime',
      orgId: 'orgId',
      pageSize: 'pageSize',
      roomCode: 'roomCode',
      roomName: 'roomName',
      startTime: 'startTime',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      currentPage: 'number',
      endTime: 'number',
      orgId: 'string',
      pageSize: 'number',
      roomCode: 'string',
      roomName: 'string',
      startTime: 'number',
      workNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

