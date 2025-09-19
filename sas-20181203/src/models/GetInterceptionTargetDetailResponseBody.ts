// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterceptionTargetDetailResponseBodyRuleTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the network object belongs.
   * 
   * @example
   * netperf-client
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * ca6e6594def8d4be8b2795fd12c32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the container cluster.
   * 
   * @example
   * sas-test-cnnf
   */
  clusterName?: string;
  /**
   * @remarks
   * An array that consists of the images of the network object.
   */
  imageList?: string[];
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * secondary
   */
  namespace?: string;
  /**
   * @remarks
   * An array that consists of the labels specified for the network object.
   */
  tagList?: string[];
  /**
   * @remarks
   * The ID of the network object.
   * 
   * @example
   * 400723
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the network object.
   * 
   * @example
   * destination-test-obj-Na3cF
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the network object. Valid values:
   * 
   * *   **IMAGE**: image
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      imageList: 'ImageList',
      namespace: 'Namespace',
      tagList: 'TagList',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      imageList: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      targetId: 'number',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageList)) {
      $dara.Model.validateArray(this.imageList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterceptionTargetDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the network object.
   */
  ruleTarget?: GetInterceptionTargetDetailResponseBodyRuleTarget;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleTarget: 'RuleTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleTarget: GetInterceptionTargetDetailResponseBodyRuleTarget,
    };
  }

  validate() {
    if(this.ruleTarget && typeof (this.ruleTarget as any).validate === 'function') {
      (this.ruleTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

