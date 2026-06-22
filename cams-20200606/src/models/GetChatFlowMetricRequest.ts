// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatFlowMetricRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  flowCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  flowVersion?: string;
  /**
   * @example
   * 31
   */
  from?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  metricName?: string;
  metricParam?: { [key: string]: any };
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 81
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

