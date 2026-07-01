// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The creation time of the MediaConnect Flow instance.
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether Input Failover is enabled for the flow. Valid values: `yes` and `no`.
   * 
   * @example
   * yes
   */
  flowFailover?: string;
  /**
   * @remarks
   * The ID of the MediaConnect Flow instance.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the MediaConnect Flow instance.
   * 
   * @example
   * AliTestFlow
   */
  flowName?: string;
  flowRegion?: string;
  /**
   * @remarks
   * The status of the MediaConnect Flow instance.
   * 
   * @example
   * online
   */
  flowStatus?: string;
  /**
   * @remarks
   * The start time of the MediaConnect Flow instance.
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
   * The description of the API call.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * FB503AEF-118E-1516-89E2-7B227EA1AC20
   */
  requestId?: string;
  /**
   * @remarks
   * The return code. A value of 0 indicates success.
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

