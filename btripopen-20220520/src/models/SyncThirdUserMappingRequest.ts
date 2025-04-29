// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncThirdUserMappingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * weCom
   */
  thirdChannelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  thirdUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      thirdChannelType: 'third_channel_type',
      thirdUserId: 'third_user_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      thirdChannelType: 'string',
      thirdUserId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

