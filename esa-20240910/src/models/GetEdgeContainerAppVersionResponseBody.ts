// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppVersionResponseBodyVersion } from "./GetEdgeContainerAppVersionResponseBodyVersion";


export class GetEdgeContainerAppVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the version.
   */
  version?: GetEdgeContainerAppVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: GetEdgeContainerAppVersionResponseBodyVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

