// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackPathEventDetailResponseBodyAttackPathEventDstAsset extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service asset.
   * 
   * @example
   * 2
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * @example
   * 3
   */
  assetType?: number;
  /**
   * @remarks
   * The ID of the cloud service asset instance.
   * 
   * @example
   * i-bp18ifsr1tu1dx39****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the cloud service asset instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The sensitive asset flag. Valid values:
   * - **0**: Not a sensitive asset.
   * - **1**: A sensitive asset.
   * 
   * @example
   * 0
   */
  sensitiveAssetFlag?: number;
  /**
   * @remarks
   * The vendor of the cloud service asset.
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      sensitiveAssetFlag: 'SensitiveAssetFlag',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      sensitiveAssetFlag: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackPathEventDetailResponseBodyAttackPathEventPathEventEdgeList extends $dara.Model {
  /**
   * @remarks
   * The edge ID.
   * 
   * @example
   * 123
   */
  edgeId?: number;
  /**
   * @remarks
   * The edge type.
   * 
   * @example
   * role_trust_user
   */
  edgeType?: string;
  /**
   * @remarks
   * The element type of the edge.
   * 
   * @example
   * branch
   */
  elementType?: string;
  /**
   * @remarks
   * The UUID of the end node of the edge.
   * 
   * @example
   * 52d59cca9d1768bab5fe081317637990
   */
  endNodeUuid?: string;
  /**
   * @remarks
   * The description of the remediation suggestion.
   * 
   * @example
   * The RAM role is granted the administrator permissions and trusts the user of another Alibaba Cloud account. In this case, the current Alibaba Cloud account may be fully controlled by the trusted Alibaba Cloud account. We recommend that you delete the trust relationship. If you need to trust another Alibaba Cloud account, we recommend that you split your business requirements and follow the principle of least privilege to grant permissions across accounts in a fine-grained manner. You can also use RAM.\\n\\nIf you confirm that the role does not need to trust an Alibaba Cloud account, perform the following operations: In the RAM console, click the required RAM role. On the page that appears, view the trust policy of the role. Then, edit the Service field to delete the trust relationship. If you confirm that permissions can be reduced, perform the following operations: In the RAM console, click the required RAM role. On the page that appears, view the permissions of the role. Then, find the policy that defines the administrator permissions and revoke the policy. Attach another policy to the role based on your business requirements.
   */
  repairSuggestionDisplay?: string;
  /**
   * @remarks
   * The UUID of the start node of the edge.
   * 
   * @example
   * b7e1bd42c4ca47f69020f4a27b47d2b4
   */
  startNodeUuid?: string;
  static names(): { [key: string]: string } {
    return {
      edgeId: 'EdgeId',
      edgeType: 'EdgeType',
      elementType: 'ElementType',
      endNodeUuid: 'EndNodeUuid',
      repairSuggestionDisplay: 'RepairSuggestionDisplay',
      startNodeUuid: 'StartNodeUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeId: 'number',
      edgeType: 'string',
      elementType: 'string',
      endNodeUuid: 'string',
      repairSuggestionDisplay: 'string',
      startNodeUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackPathEventDetailResponseBodyAttackPathEventPathEventNodeList extends $dara.Model {
  /**
   * @remarks
   * The AI asset flag. Valid values:
   * - **0**: Not an AI asset.
   * - **1**: An AI asset.
   * 
   * @example
   * 1
   */
  aiAssetFlag?: number;
  /**
   * @remarks
   * The element type of the node.
   * 
   * @example
   * branch
   */
  elementType?: string;
  /**
   * @remarks
   * The node details.
   * 
   * @example
   * {"assetId":0}
   */
  nodeDetail?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * hypermatch_uploader
   */
  nodeName?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * user
   */
  nodeType?: string;
  /**
   * @remarks
   * The node UUID.
   * 
   * @example
   * 52d59cca9d1768bab5fe081317637990
   */
  nodeUuid?: string;
  /**
   * @remarks
   * The sensitive asset flag. Valid values:
   * - **0**: Not a sensitive asset.
   * - **1**: A sensitive asset.
   * 
   * @example
   * 0
   */
  sensitiveAssetFlag?: number;
  static names(): { [key: string]: string } {
    return {
      aiAssetFlag: 'AiAssetFlag',
      elementType: 'ElementType',
      nodeDetail: 'NodeDetail',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      nodeUuid: 'NodeUuid',
      sensitiveAssetFlag: 'SensitiveAssetFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiAssetFlag: 'number',
      elementType: 'string',
      nodeDetail: 'string',
      nodeName: 'string',
      nodeType: 'string',
      nodeUuid: 'string',
      sensitiveAssetFlag: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackPathEventDetailResponseBodyAttackPathEventSrcAsset extends $dara.Model {
  /**
   * @remarks
   * The subtype of the cloud service asset.
   * 
   * @example
   * 4
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of the cloud service asset.
   * 
   * @example
   * 14
   */
  assetType?: number;
  /**
   * @remarks
   * The ID of the cloud service asset instance.
   * 
   * @example
   * i-25b24****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the cloud service asset instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sensitive asset flag. Valid values:
   * - **0**: Not a sensitive asset.
   * - **1**: A sensitive asset.
   * 
   * @example
   * 0
   */
  sensitiveAssetFlag?: number;
  /**
   * @remarks
   * The vendor of the cloud service asset.
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      sensitiveAssetFlag: 'SensitiveAssetFlag',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      sensitiveAssetFlag: 'number',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackPathEventDetailResponseBodyAttackPathEvent extends $dara.Model {
  /**
   * @remarks
   * The destination asset.
   */
  dstAsset?: GetAttackPathEventDetailResponseBodyAttackPathEventDstAsset;
  /**
   * @remarks
   * The timestamp when the event first occurred. Unit: milliseconds.
   * 
   * @example
   * 1735956726000
   */
  firstTime?: number;
  /**
   * @remarks
   * The timestamp when the event was last detected. Unit: milliseconds.
   * 
   * @example
   * 1741832168000
   */
  lastTime?: number;
  /**
   * @remarks
   * The description of the path details.
   * 
   * @example
   * The system detects that the role that trusts another Alibaba Cloud account has administrator permissions. This can cause the system to be fully controlled. We recommend that you delete the trust relationship and review the permissions of the role.
   */
  pathDetailDesc?: string;
  /**
   * @remarks
   * The list of path event edges.
   */
  pathEventEdgeList?: GetAttackPathEventDetailResponseBodyAttackPathEventPathEventEdgeList[];
  /**
   * @remarks
   * The list of path nodes.
   */
  pathEventNodeList?: GetAttackPathEventDetailResponseBodyAttackPathEventPathEventNodeList[];
  /**
   * @remarks
   * The path name.
   * 
   * @example
   * ecs_get_credential_by_create_login_profile
   */
  pathName?: string;
  /**
   * @remarks
   * The description of the path name.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
  /**
   * @remarks
   * The path type.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * The description of the path type.
   * 
   * @example
   * Privilege Escalation by Role
   */
  pathTypeDesc?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * suspicious
   */
  riskLevel?: string;
  /**
   * @remarks
   * The source asset.
   */
  srcAsset?: GetAttackPathEventDetailResponseBodyAttackPathEventSrcAsset;
  static names(): { [key: string]: string } {
    return {
      dstAsset: 'DstAsset',
      firstTime: 'FirstTime',
      lastTime: 'LastTime',
      pathDetailDesc: 'PathDetailDesc',
      pathEventEdgeList: 'PathEventEdgeList',
      pathEventNodeList: 'PathEventNodeList',
      pathName: 'PathName',
      pathNameDesc: 'PathNameDesc',
      pathType: 'PathType',
      pathTypeDesc: 'PathTypeDesc',
      riskLevel: 'RiskLevel',
      srcAsset: 'SrcAsset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstAsset: GetAttackPathEventDetailResponseBodyAttackPathEventDstAsset,
      firstTime: 'number',
      lastTime: 'number',
      pathDetailDesc: 'string',
      pathEventEdgeList: { 'type': 'array', 'itemType': GetAttackPathEventDetailResponseBodyAttackPathEventPathEventEdgeList },
      pathEventNodeList: { 'type': 'array', 'itemType': GetAttackPathEventDetailResponseBodyAttackPathEventPathEventNodeList },
      pathName: 'string',
      pathNameDesc: 'string',
      pathType: 'string',
      pathTypeDesc: 'string',
      riskLevel: 'string',
      srcAsset: GetAttackPathEventDetailResponseBodyAttackPathEventSrcAsset,
    };
  }

  validate() {
    if(this.dstAsset && typeof (this.dstAsset as any).validate === 'function') {
      (this.dstAsset as any).validate();
    }
    if(Array.isArray(this.pathEventEdgeList)) {
      $dara.Model.validateArray(this.pathEventEdgeList);
    }
    if(Array.isArray(this.pathEventNodeList)) {
      $dara.Model.validateArray(this.pathEventNodeList);
    }
    if(this.srcAsset && typeof (this.srcAsset as any).validate === 'function') {
      (this.srcAsset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackPathEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the attack path event.
   */
  attackPathEvent?: GetAttackPathEventDetailResponseBodyAttackPathEvent;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathEvent: 'AttackPathEvent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathEvent: GetAttackPathEventDetailResponseBodyAttackPathEvent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.attackPathEvent && typeof (this.attackPathEvent as any).validate === 'function') {
      (this.attackPathEvent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

