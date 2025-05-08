// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageGatewayResponseBodyUnAllocationId extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-chengdu-26
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * e426409258
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

