// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUnionChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

