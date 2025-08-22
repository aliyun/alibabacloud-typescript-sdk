// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnKvAccountResponseBodyNamespaceList extends $dara.Model {
  capacity?: number;
  /**
   * @remarks
   * The available capacity of the namespace.
   * 
   * @example
   * 1 GB
   */
  capacityString?: string;
  capacityUsed?: number;
  /**
   * @remarks
   * The namespace has used capacity.
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

export class DescribeDcdnKvAccountResponseBody extends $dara.Model {
  capacity?: number;
  /**
   * @remarks
   * The available capacity of all namespaces.
   * 
   * @example
   * 2GB
   */
  capacityString?: string;
  capacityUsed?: number;
  /**
   * @remarks
   * All namespaces have used capacity.
   * 
   * @example
   * 200 MB
   */
  capacityUsedString?: string;
  /**
   * @remarks
   * Details about the namespaces.
   */
  namespaceList?: DescribeDcdnKvAccountResponseBodyNamespaceList[];
  /**
   * @remarks
   * The maximum number of namespaces that you can apply for by using your account.
   * 
   * @example
   * 10
   */
  namespaceQuota?: number;
  /**
   * @remarks
   * The number of namespaces that you applied for by using your account.
   * 
   * @example
   * 1
   */
  namespaceUsed?: number;
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
   * The status of the account.
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * 
   * @example
   * online,offline
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      capacityString: 'CapacityString',
      capacityUsed: 'CapacityUsed',
      capacityUsedString: 'CapacityUsedString',
      namespaceList: 'NamespaceList',
      namespaceQuota: 'NamespaceQuota',
      namespaceUsed: 'NamespaceUsed',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      capacityString: 'string',
      capacityUsed: 'number',
      capacityUsedString: 'string',
      namespaceList: { 'type': 'array', 'itemType': DescribeDcdnKvAccountResponseBodyNamespaceList },
      namespaceQuota: 'number',
      namespaceUsed: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaceList)) {
      $dara.Model.validateArray(this.namespaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

