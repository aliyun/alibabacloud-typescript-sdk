// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialListItem extends $dara.Model {
  createdAt?: string;
  credentialAuthType?: string;
  credentialId?: string;
  credentialName?: string;
  credentialSourceType?: string;
  description?: string;
  enabled?: boolean;
  relatedResourceCount?: number;
  updatedAt?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      credentialAuthType: 'credentialAuthType',
      credentialId: 'credentialId',
      credentialName: 'credentialName',
      credentialSourceType: 'credentialSourceType',
      description: 'description',
      enabled: 'enabled',
      relatedResourceCount: 'relatedResourceCount',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      credentialAuthType: 'string',
      credentialId: 'string',
      credentialName: 'string',
      credentialSourceType: 'string',
      description: 'string',
      enabled: 'boolean',
      relatedResourceCount: 'number',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

