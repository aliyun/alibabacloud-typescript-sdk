// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChannelAssemblySource } from "./ChannelAssemblySource";


export class GetSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The source information.
   */
  source?: ChannelAssemblySource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      source: ChannelAssemblySource,
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

