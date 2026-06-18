// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKvNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the KV namespace.
   * 
   * @example
   * this is a test namespace.
   */
  description?: string;
  /**
   * @remarks
   * The name of the KV namespace.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the KV namespace.
   * 
   * @example
   * 657717877171818496
   */
  namespaceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the KV namespace. Valid values:
   * 
   * - **online**: The namespace is available.
   * 
   * - **delete**: The namespace is pending deletion.
   * 
   * - **deleting**: The namespace is being deleted.
   * 
   * - **deleted**: The namespace is deleted.
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

