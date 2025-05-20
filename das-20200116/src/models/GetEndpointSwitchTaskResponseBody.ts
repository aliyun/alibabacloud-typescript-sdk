// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEndpointSwitchTaskResponseBodyData } from "./GetEndpointSwitchTaskResponseBodyData";


export class GetEndpointSwitchTaskResponseBody extends $dara.Model {
  code?: string;
  data?: GetEndpointSwitchTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEndpointSwitchTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
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

