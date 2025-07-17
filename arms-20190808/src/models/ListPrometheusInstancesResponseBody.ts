// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The Prometheus instances in the region in the JSON format.
   * 
   * @example
   * [{"agentStatus":"0","clusterId":"global-v2-cn-1672753017899-dmjnwtzz","clusterName":"test-GlobalView","clusterType":"GlobalViewV2","commercialConfig":{},"createTime":1656579981000,"id":13785300,"isAdvancedClusterInstalled":false,"isClusterRunning":true,"isControllerInstalled":true,"isIntegrationCenter":false,"regionId":"cn-hongkong","updateTime":1657616273000,"userId":"1672753017899"},{"agentStatus":"0","clusterId":"51a123a61a8f31f0","clusterName":"cloud-product-prometheus_cn-qingdao","clusterType":"cloud-product-prometheus","commercialConfig":{},"controllerId":"51a123a61a8f31f0","createTime":1653532488000,"id":13746658,"isAdvancedClusterInstalled":false,"isClusterRunning":true,"isControllerInstalled":true,"isIntegrationCenter":false,"regionId":"cn-qingdao","updateTime":1653532518000,"userId":"1672753017899"}]
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

