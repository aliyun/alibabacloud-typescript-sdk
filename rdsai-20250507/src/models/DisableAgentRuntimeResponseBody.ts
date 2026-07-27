// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAgentRuntimeResponseBody extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
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
      branchName: 'BranchName',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
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

