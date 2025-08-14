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
  flowRegion?: string;
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
      flowRegion: 'FlowRegion',
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
      flowRegion: 'string',
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

export class GetMediaConnectFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: GetMediaConnectFlowResponseBodyContent;
  /**
   * @remarks
   * The call description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FB503AEF-118E-1516-89E2-7B227EA1AC20
   */
  requestId?: string;
  /**
   * @remarks
   * The returned code. A value of 0 indicates the call is successful.
   * 
   * @example
   * 0
   */
  retcode?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
      retcode: 'Retcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetMediaConnectFlowResponseBodyContent,
      description: 'string',
      requestId: 'string',
      retcode: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

