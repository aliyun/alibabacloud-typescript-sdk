// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChannelAssemblySourceLocation } from "./ChannelAssemblySourceLocation";


export class CreateSourceLocationResponseBody extends $dara.Model {
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
   * The source location information.
   */
  sourceLocation?: ChannelAssemblySourceLocation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceLocation: 'SourceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceLocation: ChannelAssemblySourceLocation,
    };
  }

  validate() {
    if(this.sourceLocation && typeof (this.sourceLocation as any).validate === 'function') {
      (this.sourceLocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

