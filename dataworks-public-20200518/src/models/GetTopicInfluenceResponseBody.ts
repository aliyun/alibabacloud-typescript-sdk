// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicInfluenceResponseBodyDataInfluences extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * @example
   * 12345
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Baseline name
   */
  baselineName?: string;
  /**
   * @remarks
   * The data timestamp of the baseline instance.
   * 
   * @example
   * 1553356800000
   */
  bizdate?: number;
  /**
   * @remarks
   * The margin of the baseline instance. Unit: seconds.
   * 
   * @example
   * 360
   */
  buffer?: number;
  /**
   * @remarks
   * The ID of the cycle of the baseline instance. For a baseline instance that is scheduled by day, the field value is 1. For a baseline instance that is scheduled by hour, the field value ranges from 1 to 24.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 952795****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 2, 5, 7, and 8.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the workspace to which the baseline belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the baseline. Valid values: ERROR, SAFE, DANGROUS, and OVER. The value ERROR indicates that no nodes are associated with the baseline, or all nodes associated with the baseline are suspended. The value SAFE indicates that nodes are run before the alert duration begins. The value DANGROUS indicates that nodes are still running after the alert duration ends but the committed time does not arrive. The value OVER indicates that nodes are still running after the committed time.
   * 
   * @example
   * SAFE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      bizdate: 'Bizdate',
      buffer: 'Buffer',
      inGroupId: 'InGroupId',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      baselineName: 'string',
      bizdate: 'number',
      buffer: 'number',
      inGroupId: 'number',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The affected baseline instances.
   */
  influences?: GetTopicInfluenceResponseBodyDataInfluences[];
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1234
   */
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      influences: 'Influences',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      influences: { 'type': 'array', 'itemType': GetTopicInfluenceResponseBodyDataInfluences },
      topicId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.influences)) {
      $dara.Model.validateArray(this.influences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicInfluenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetTopicInfluenceResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTopicInfluenceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

