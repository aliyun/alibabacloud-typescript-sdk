// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  flowFailover?: string;
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * AliTestFlow
   */
  flowName?: string;
  /**
   * @remarks
   * The state of the flow.
   * 
   * @example
   * online
   */
  flowStatus?: string;
  /**
   * @remarks
   * The time when the flow is started.
   * 
   * @example
   * 2024-07-18T01:39:24Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      flowFailover: 'FlowFailover',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowStatus: 'FlowStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      flowFailover: 'string',
      flowId: 'string',
      flowName: 'string',
      flowStatus: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

