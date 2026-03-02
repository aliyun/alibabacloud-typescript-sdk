// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Provider } from "./Provider";


export class LibrarySchema extends $dara.Model {
  artifactId?: string;
  companyId?: number;
  description?: string;
  gitGroup?: string;
  groupId?: string;
  id?: number;
  industry?: string;
  libraryId?: number;
  marketId?: number;
  name?: string;
  provider?: Provider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      companyId: 'companyId',
      description: 'description',
      gitGroup: 'gitGroup',
      groupId: 'groupId',
      id: 'id',
      industry: 'industry',
      libraryId: 'libraryId',
      marketId: 'marketId',
      name: 'name',
      provider: 'provider',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      companyId: 'number',
      description: 'string',
      gitGroup: 'string',
      groupId: 'string',
      id: 'number',
      industry: 'string',
      libraryId: 'number',
      marketId: 'number',
      name: 'string',
      provider: Provider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.provider && typeof (this.provider as any).validate === 'function') {
      (this.provider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

