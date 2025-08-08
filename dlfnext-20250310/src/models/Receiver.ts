// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Receiver extends $dara.Model {
  comment?: string;
  createdAt?: number;
  createdBy?: string;
  receiverName?: string;
  receiverTenantId?: number;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      receiverName: 'receiverName',
      receiverTenantId: 'receiverTenantId',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createdAt: 'number',
      createdBy: 'string',
      receiverName: 'string',
      receiverTenantId: 'number',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

