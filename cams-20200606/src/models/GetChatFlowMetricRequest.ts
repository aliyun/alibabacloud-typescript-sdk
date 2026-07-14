// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatFlowMetricRequest extends $dara.Model {
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
   * The business extension information. Default value: an empty collection.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
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
   * The flow version. On the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page, click the flow name to open the canvas and view the flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The start time. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1751299200
   */
  from?: number;
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * - nodeUsageStatistics: node usage statistics.
   * 
   * - nodeErrorDetails: node error details.
   * 
   * This parameter is required.
   * 
   * @example
   * nodeUsageStatistics
   */
  metricName?: string;
  /**
   * @remarks
   * The extended parameter for the metric query. When MetricName is set to nodeErrorDetails, pass in a JSON string. Valid values for the JSON fields:
   * 
   * - pageNo: the current page number.
   * 
   * - pageSize: the number of entries per page.
   * 
   * - nodeId: the node ID. On the [Flow Editor](https://chatapp.console.aliyun.com/ChatFlowBuilder) page, click the flow name to open the canvas and copy the node ID.
   * 
   * @example
   * {
   *   "pageNo": 1,
   *   "pageSize": 20,
   *   "nodeId": "SendWhatsAppMessage#H7fKq5rM"
   * }
   */
  metricParam?: { [key: string]: any };
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The end time. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1751385599
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      from: 'From',
      metricName: 'MetricName',
      metricParam: 'MetricParam',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowCode: 'string',
      flowVersion: 'string',
      from: 'number',
      metricName: 'string',
      metricParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      to: 'number',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    if(this.metricParam) {
      $dara.Model.validateMap(this.metricParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

