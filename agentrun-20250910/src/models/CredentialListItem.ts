// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialListItem extends $dara.Model {
  createdAt?: string;
  credentialAuthType?: string;
  credentialId?: string;
  credentialName?: string;
  credentialSourceType?: string;
  enabled?: boolean;
  relatedResourceCount?: number;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      credentialAuthType: 'credentialAuthType',
      credentialId: 'credentialId',
      credentialName: 'credentialName',
      credentialSourceType: 'credentialSourceType',
      enabled: 'enabled',
      relatedResourceCount: 'relatedResourceCount',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      credentialAuthType: 'string',
      credentialId: 'string',
      credentialName: 'string',
      credentialSourceType: 'string',
      enabled: 'boolean',
      relatedResourceCount: 'number',
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

