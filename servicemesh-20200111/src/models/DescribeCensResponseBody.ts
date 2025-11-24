// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Kubernetes clusters that are added to the same ASM instance but are in different VPCs and are not connected by using a Cloud Enterprise Network (CEN) instance.
   */
  clusters?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

