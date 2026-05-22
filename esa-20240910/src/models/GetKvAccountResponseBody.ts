// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvAccountResponseBodyNamespaceList extends $dara.Model {
  capacity?: number;
  capacityString?: string;
  capacityUsed?: number;
  capacityUsedString?: string;
  description?: string;
  namespace?: string;
  namespaceId?: string;
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

export class GetKvAccountResponseBody extends $dara.Model {
  capacity?: number;
  capacityString?: string;
  capacityUsed?: number;
  capacityUsedString?: string;
  namespaceList?: GetKvAccountResponseBodyNamespaceList[];
  namespaceQuota?: number;
  namespaceUsed?: number;
  requestId?: string;
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
      namespaceList: { 'type': 'array', 'itemType': GetKvAccountResponseBodyNamespaceList },
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

