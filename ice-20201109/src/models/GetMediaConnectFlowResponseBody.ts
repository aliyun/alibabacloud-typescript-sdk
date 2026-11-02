// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The time when the flow was created. The time follows the ISO 8601 standard in UTC and ends with Z.
   * 
   * @example
   * 2024-07-18T01:29:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether dual-stream disaster recovery is enabled for the flow input. Valid values: yes and no.
   * 
   * @example
   * yes
   */
  flowFailover?: string;
  /**
   * @remarks
   * The flow instance ID.
   * 
   * @example
   * 34900dc6-90ec-4968-af3c-fcd87f231a5f
   */
  flowId?: string;
  /**
   * @remarks
   * The flow instance name.
   * 
   * @example
   * AliTestFlow
   */
  flowName?: string;
  /**
   * @remarks
   * The region to which the flow instance belongs.
   * 
   * @example
   * me-east-1
   */
  flowRegion?: string;
  /**
   * @remarks
   * The flow status.
   * 
   * @example
   * online
   */
  flowStatus?: string;
  /**
   * @remarks
   * The time when the flow was started. The time follows the ISO 8601 standard in UTC and ends with Z.
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
   * The request ID.
   * 
   * @example
   * FB503AEF-118E-1516-89E2-7B227EA1AC20
   */
  requestId?: string;
  /**
   * @remarks
   * The returned status code. A value of 0 indicates success.
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

