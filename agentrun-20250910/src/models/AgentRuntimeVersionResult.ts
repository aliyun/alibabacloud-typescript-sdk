// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentRuntimeVersion } from "./AgentRuntimeVersion";


export class AgentRuntimeVersionResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   */
  code?: string;
  /**
   * @remarks
   * Detailed information about the agent runtime version
   */
  data?: AgentRuntimeVersion;
  /**
   * @remarks
   * A unique request identifier used for troubleshooting
   */
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
      data: AgentRuntimeVersion,
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

