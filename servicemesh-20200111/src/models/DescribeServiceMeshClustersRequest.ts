// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 30
   */
  limit?: number;
  /**
   * @remarks
   * The position where the query starts.
   * 
   * @example
   * 20
   */
  offset?: number;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      offset: 'Offset',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      offset: 'number',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

