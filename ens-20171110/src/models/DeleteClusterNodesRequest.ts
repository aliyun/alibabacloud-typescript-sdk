// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodes?: string[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': 'string' },
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

export class DeleteClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DeleteClusterNodesRequestBody;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DeleteClusterNodesRequestBody,
      clusterId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

