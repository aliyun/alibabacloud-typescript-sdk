// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAgentRuntimeResponseBody extends $dara.Model {
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D984FD38-6C2D-55DF-B0D7-8BCAC2E1F8C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

