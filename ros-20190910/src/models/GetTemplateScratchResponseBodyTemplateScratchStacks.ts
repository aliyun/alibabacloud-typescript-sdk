// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateScratchResponseBodyTemplateScratchStacks extends $dara.Model {
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 3708bf6a-3a67-44d4-9eb1-c56704b9****
   */
  stackId?: string;
  /**
   * @remarks
   * The purpose of the stack. Valid values:
   * 
   * *   ResourceImport: resource management
   * *   ArchitectureReplication: resource replication
   * 
   * @example
   * ArchitectureReplication
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      usageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

