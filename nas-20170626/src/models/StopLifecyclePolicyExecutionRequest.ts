// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopLifecyclePolicyExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

