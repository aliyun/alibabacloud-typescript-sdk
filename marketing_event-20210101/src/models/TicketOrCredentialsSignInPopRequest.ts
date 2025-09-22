// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketOrCredentialsSignInPopRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4546
   */
  activityId?: string;
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 会议名称
   */
  conferenceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Z10
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 入口名称
   */
  entryName?: string;
  /**
   * @example
   * 429005111100000
   */
  idcard?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-25 14:11
   */
  signTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      code: 'Code',
      conferenceName: 'ConferenceName',
      deviceId: 'DeviceId',
      entryName: 'EntryName',
      idcard: 'Idcard',
      signTime: 'SignTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      code: 'string',
      conferenceName: 'string',
      deviceId: 'string',
      entryName: 'string',
      idcard: 'string',
      signTime: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

