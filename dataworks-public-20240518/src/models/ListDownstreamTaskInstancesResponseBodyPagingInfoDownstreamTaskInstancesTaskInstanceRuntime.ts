// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstanceRuntime extends $dara.Model {
  /**
   * @remarks
   * The host for running.
   * 
   * @example
   * cn-shanghai.1.2
   */
  gateway?: string;
  /**
   * @remarks
   * The instance run ID.
   * 
   * @example
   * T3_123
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: 'string',
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

