// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BucEnterprise extends $dara.Model {
  accountId?: string;
  codeupEnterpriseId?: string;
  codeupNamespaceId?: number;
  description?: string;
  id?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      codeupEnterpriseId: 'codeupEnterpriseId',
      codeupNamespaceId: 'codeupNamespaceId',
      description: 'description',
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      codeupEnterpriseId: 'string',
      codeupNamespaceId: 'number',
      description: 'string',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

