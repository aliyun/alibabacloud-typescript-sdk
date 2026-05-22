// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKvNamespaceResponseBody extends $dara.Model {
  description?: string;
  namespace?: string;
  namespaceId?: string;
  requestId?: string;
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

