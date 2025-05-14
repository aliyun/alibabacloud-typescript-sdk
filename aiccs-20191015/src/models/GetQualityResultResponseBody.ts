// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityResultResponseBodyData } from "./GetQualityResultResponseBodyData";


export class GetQualityResultResponseBody extends $dara.Model {
  channelTypeName?: string;
  code?: string;
  data?: GetQualityResultResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      channelTypeName: 'ChannelTypeName',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelTypeName: 'string',
      code: 'string',
      data: GetQualityResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

