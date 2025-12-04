// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFabricTopologyResponseBodyContentTopoInfo extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * core-1
   */
  layerName?: string;
  /**
   * @remarks
   * Hierarchical resource types
   * 
   * Valid value:
   * 
   * *   core: core layer.
   * *   node: Lingjun node.
   * *   lni: lingjun network interface controller.
   * *   spine: backbone layer.
   * *   leaf: access layer
   * 
   * @example
   * core
   */
  layerType?: string;
  /**
   * @remarks
   * Next Level
   */
  nextLayer?: any[];
  static names(): { [key: string]: string } {
    return {
      layerName: 'LayerName',
      layerType: 'LayerType',
      nextLayer: 'NextLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layerName: 'string',
      layerType: 'string',
      nextLayer: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.nextLayer)) {
      $dara.Model.validateArray(this.nextLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster-****
   */
  clusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * network interface controller Topology Information
   */
  topoInfo?: GetFabricTopologyResponseBodyContentTopoInfo[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-j6ctp4n75306****
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * @example
   * vpd-fuli****
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      topoInfo: 'TopoInfo',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      topoInfo: { 'type': 'array', 'itemType': GetFabricTopologyResponseBodyContentTopoInfo },
      vpcId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.topoInfo)) {
      $dara.Model.validateArray(this.topoInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFabricTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetFabricTopologyResponseBodyContent;
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
   * The ID of the request.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetFabricTopologyResponseBodyContent,
      message: 'string',
      requestId: 'string',
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

