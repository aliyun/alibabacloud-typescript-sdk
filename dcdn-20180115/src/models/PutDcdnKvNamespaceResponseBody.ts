// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDcdnKvNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * the first namespace
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 12423131231****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   **online**: normal
   * *   **delete**: pending delete
   * *   **deleting**: being deleted
   * *   **deleted**: deleted
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      namespaceId: 'string',
      requestId: 'string',
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

