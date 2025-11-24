// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGuestClusterNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The labels of the namespaces. Labels are returned only when `ShowNsLabels` is set to `true`.
   * 
   * @example
   * {"default":{"istio-injection":"enabled"}}
   */
  nsLabels?: { [key: string]: any };
  /**
   * @remarks
   * The names of the namespaces.
   */
  nsList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nsLabels: 'NsLabels',
      nsList: 'NsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nsLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nsList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.nsLabels) {
      $dara.Model.validateMap(this.nsLabels);
    }
    if(Array.isArray(this.nsList)) {
      $dara.Model.validateArray(this.nsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

