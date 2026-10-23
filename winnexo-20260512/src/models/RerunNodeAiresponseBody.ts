// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunNodeAIResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The physical instance ID.
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The key of the node scheduled for rerun.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the rerun request is accepted. A value of true indicates that the rerun is accepted, but does not mean that the AI has completed the task. Failures are returned through the Code and Message fields.
   * 
   * @example
   * true
   */
  rerunAccepted?: boolean;
  /**
   * @remarks
   * The state version.
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
      nodeId: 'nodeId',
      requestId: 'requestId',
      rerunAccepted: 'rerunAccepted',
      stateVersion: 'stateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      nodeId: 'string',
      requestId: 'string',
      rerunAccepted: 'boolean',
      stateVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

