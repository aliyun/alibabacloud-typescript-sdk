// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegisteredServiceNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of the queried namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

