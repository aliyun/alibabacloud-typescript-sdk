// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RelatedResource } from "./RelatedResource";


export class GetCredentialOutput extends $dara.Model {
  createdAt?: string;
  credentialAuthType?: string;
  credentialId?: string;
  credentialName?: string;
  credentialPublicConfig?: { [key: string]: string };
  credentialSecret?: string;
  credentialSourceType?: string;
  description?: string;
  enabled?: boolean;
  relatedResources?: RelatedResource[];
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      credentialAuthType: 'credentialAuthType',
      credentialId: 'credentialId',
      credentialName: 'credentialName',
      credentialPublicConfig: 'credentialPublicConfig',
      credentialSecret: 'credentialSecret',
      credentialSourceType: 'credentialSourceType',
      description: 'description',
      enabled: 'enabled',
      relatedResources: 'relatedResources',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      credentialAuthType: 'string',
      credentialId: 'string',
      credentialName: 'string',
      credentialPublicConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      credentialSecret: 'string',
      credentialSourceType: 'string',
      description: 'string',
      enabled: 'boolean',
      relatedResources: { 'type': 'array', 'itemType': RelatedResource },
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.credentialPublicConfig) {
      $dara.Model.validateMap(this.credentialPublicConfig);
    }
    if(Array.isArray(this.relatedResources)) {
      $dara.Model.validateArray(this.relatedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

