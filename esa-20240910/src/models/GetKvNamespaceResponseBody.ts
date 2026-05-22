// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKvNamespaceResponseBody extends $dara.Model {
  capacity?: number;
  capacityString?: string;
  capacityUsed?: number;
  capacityUsedString?: string;
  description?: string;
  namespace?: string;
  namespaceId?: string;
  requestId?: string;
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

