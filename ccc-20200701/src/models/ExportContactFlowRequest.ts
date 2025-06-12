// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportContactFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lc-uf61xdtm0mf73k
   */
  flowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb3xxxx
   */
  instanceId?: string;
  /**
   * @example
   * AF9834D8-6D09-4A1B-BADB-B019D9D444C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      instanceId: 'string',
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

