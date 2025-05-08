// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvAccountResponseBodyNamespaceList extends $dara.Model {
  /**
   * @remarks
   * The available capacity of the namespace. Unit: bytes.
   * 
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @remarks
   * The available capacity of the namespace.
   * 
   * @example
   * 1 GB
   */
  capacityString?: string;
  /**
   * @remarks
   * The used capacity of the namespace. Unit: bytes.
   * 
   * @example
   * 100048576
   */
  capacityUsed?: number;
  /**
   * @remarks
   * The used capacity of the namespace.
   * 
   * @example
   * 100 MB
   */
  capacityUsedString?: string;
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
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 643355322374688768
   */
  namespaceId?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   **online**: normal.
   * *   **delete**: pending deletion.
   * *   **deleting**: being deleted.
   * *   **deleted**: deleted.
   * 
   * @example
   * online
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      capacityString: 'CapacityString',
      capacityUsed: 'CapacityUsed',
      capacityUsedString: 'CapacityUsedString',
      description: 'Description',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      capacityString: 'string',
      capacityUsed: 'number',
      capacityUsedString: 'string',
      description: 'string',
      namespace: 'string',
      namespaceId: 'string',
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

