// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * @example
   * lifecyclepolicy1
   */
  lifecyclePolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
      lifecyclePolicyName: 'LifecyclePolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyId: 'string',
      lifecyclePolicyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

