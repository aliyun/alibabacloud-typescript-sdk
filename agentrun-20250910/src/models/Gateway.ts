// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Gateway extends $dara.Model {
  createdAt?: string;
  gatewayId?: string;
  internetUrl?: string;
  intranetUrl?: string;
  name?: string;
  status?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      gatewayId: 'gatewayId',
      internetUrl: 'internetUrl',
      intranetUrl: 'intranetUrl',
      name: 'name',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      gatewayId: 'string',
      internetUrl: 'string',
      intranetUrl: 'string',
      name: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

