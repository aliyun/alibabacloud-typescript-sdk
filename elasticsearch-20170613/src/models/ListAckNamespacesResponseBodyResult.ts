// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAckNamespacesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * @example
   * logging
   */
  namespace?: string;
  /**
   * @remarks
   * The status of the namespace.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

