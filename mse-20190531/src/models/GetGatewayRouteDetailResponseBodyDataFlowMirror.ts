// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayRouteDetailResponseBodyDataFlowMirror extends $dara.Model {
  /**
   * @remarks
   * 流量复制比例（%），取值0-100。
   * 
   * @example
   * 90
   */
  percentage?: number;
  /**
   * @remarks
   * 目标服务端口。
   * 
   * @example
   * 8790
   */
  port?: number;
  /**
   * @remarks
   * 开启状态，取值：
   * 
   * - on：开启
   * - off：关闭
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * 目标服务ID。
   * 
   * @example
   * 21
   */
  targetServiceId?: number;
  /**
   * @remarks
   * 目标服务名称。
   * 
   * @example
   * test
   */
  targetServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      port: 'Port',
      status: 'Status',
      targetServiceId: 'TargetServiceId',
      targetServiceName: 'TargetServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      port: 'number',
      status: 'string',
      targetServiceId: 'number',
      targetServiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

