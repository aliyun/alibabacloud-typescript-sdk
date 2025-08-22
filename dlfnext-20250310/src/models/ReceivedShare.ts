// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceivedShare extends $dara.Model {
  catalogName?: string;
  comment?: string;
  createdAt?: number;
  createdBy?: string;
  enableWrite?: boolean;
  owner?: string;
  providerTenantId?: number;
  shareId?: string;
  shareName?: string;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      comment: 'comment',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      enableWrite: 'enableWrite',
      owner: 'owner',
      providerTenantId: 'providerTenantId',
      shareId: 'shareId',
      shareName: 'shareName',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      comment: 'string',
      createdAt: 'number',
      createdBy: 'string',
      enableWrite: 'boolean',
      owner: 'string',
      providerTenantId: 'number',
      shareId: 'string',
      shareName: 'string',
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

