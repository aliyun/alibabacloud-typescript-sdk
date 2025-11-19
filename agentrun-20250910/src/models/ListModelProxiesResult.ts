// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelProxiesOutput } from "./ListModelProxiesOutput";


export class ListModelProxiesResult extends $dara.Model {
  code?: string;
  data?: ListModelProxiesOutput;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListModelProxiesOutput,
      requestId: 'string',
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

