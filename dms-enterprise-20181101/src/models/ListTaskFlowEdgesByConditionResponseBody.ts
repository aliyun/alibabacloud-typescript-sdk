// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowEdgesByConditionResponseBodyEdgesEdge extends $dara.Model {
  id?: number;
  nodeEnd?: number;
  nodeFrom?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeEnd: 'NodeEnd',
      nodeFrom: 'NodeFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      nodeEnd: 'number',
      nodeFrom: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowEdgesByConditionResponseBodyEdges extends $dara.Model {
  edge?: ListTaskFlowEdgesByConditionResponseBodyEdgesEdge[];
  static names(): { [key: string]: string } {
    return {
      edge: 'Edge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edge: { 'type': 'array', 'itemType': ListTaskFlowEdgesByConditionResponseBodyEdgesEdge },
    };
  }

  validate() {
    if(Array.isArray(this.edge)) {
      $dara.Model.validateArray(this.edge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskFlowEdgesByConditionResponseBody extends $dara.Model {
  edges?: ListTaskFlowEdgesByConditionResponseBodyEdges;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * D86249CD-422F-5ACF-85BA-9187C986AE0B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: ListTaskFlowEdgesByConditionResponseBodyEdges,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.edges && typeof (this.edges as any).validate === 'function') {
      (this.edges as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

