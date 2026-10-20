// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleClusterNodePoolRequestBody extends $dara.Model {
  /**
   * @remarks
   * The expected number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP request body.
   */
  body?: ScaleClusterNodePoolRequestBody;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np2201da356f5245cf8faa522a8a4c8224
   */
  nodepoolId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      clusterId: 'ClusterId',
      nodepoolId: 'NodepoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ScaleClusterNodePoolRequestBody,
      clusterId: 'string',
      nodepoolId: 'string',
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

