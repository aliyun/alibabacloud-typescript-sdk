// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeGroupDriftedNodesResponseBodyNodesPropertyDrifts extends $dara.Model {
  /**
   * @remarks
   * The current value of the node property. Complex types are serialized as JSON strings.
   * 
   * @example
   * old-role
   */
  actualValue?: string;
  /**
   * @remarks
   * The minimum action required to apply the TargetValue: Refresh / Reboot / Reimage. For more information, refer to the MaxDisruptiveAction parameter description in the RefreshNodeGroupNodes operation.
   * 
   * @example
   * Refresh
   */
  minRequiredAction?: string;
  /**
   * @remarks
   * The property path in dot notation (such as a.b.c), compatible with both flat and nested properties.
   * 
   * @example
   * RamRoleName
   */
  propertyPath?: string;
  /**
   * @remarks
   * The target value of the node property. Complex types are serialized as JSON strings.
   * 
   * @example
   * new-role
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      minRequiredAction: 'MinRequiredAction',
      propertyPath: 'PropertyPath',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      minRequiredAction: 'string',
      propertyPath: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupDriftedNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * node-001
   */
  nodeId?: string;
  /**
   * @remarks
   * The list of inconsistent properties for this node.
   */
  propertyDrifts?: ListNodeGroupDriftedNodesResponseBodyNodesPropertyDrifts[];
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      propertyDrifts: 'PropertyDrifts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      propertyDrifts: { 'type': 'array', 'itemType': ListNodeGroupDriftedNodesResponseBodyNodesPropertyDrifts },
    };
  }

  validate() {
    if(Array.isArray(this.propertyDrifts)) {
      $dara.Model.validateArray(this.propertyDrifts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupDriftedNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page for a single query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call. An empty value indicates that no more pages are available.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of nodes that are inconsistent with the node group configuration (paginated).
   */
  nodes?: ListNodeGroupDriftedNodesResponseBodyNodes[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListNodeGroupDriftedNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

