// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatFlowMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty set.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The flow code. You can view the flow code on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page.
   * 
   * @example
   * 9ccc41**************************
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow version. To view the flow version, click the flow name on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page to go to the canvas page of the flow editor.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1751299200
   */
  from?: number;
  /**
   * @remarks
   * The name of the monitoring metric. Valid values:
   * 
   * - nodeUsageStatistics: node usage statistics
   * 
   * - nodeErrorDetails: node error details
   * 
   * This parameter is required.
   * 
   * @example
   * nodeUsageStatistics
   */
  metricName?: string;
  /**
   * @remarks
   * The extended parameters for querying the monitoring metric. When MetricName is set to nodeErrorDetails, you must pass a JSON string. Valid JSON fields:
   * 
   * - pageNo: the current page number
   * 
   * - pageSize: the number of entries per page
   * 
   * - nodeId: the node ID. To copy the node ID, click the flow name on the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page to go to the canvas orchestration page.
   * 
   * @example
   * {
   *   "pageNo": 1,
   *   "pageSize": 20,
   *   "nodeId": "SendWhatsAppMessage#H7fKq5rM"
   * }
   */
  metricParamShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1751385599
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      from: 'From',
      metricName: 'MetricName',
      metricParamShrink: 'MetricParam',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      from: 'number',
      metricName: 'string',
      metricParamShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

