// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LibraryCreateCmd extends $dara.Model {
  artifactId?: string;
  companyId?: number;
  description?: string;
  groupId?: string;
  marketId?: number;
  name?: string;
  repoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      companyId: 'companyId',
      description: 'description',
      groupId: 'groupId',
      marketId: 'marketId',
      name: 'name',
      repoUrl: 'repoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      companyId: 'number',
      description: 'string',
      groupId: 'string',
      marketId: 'number',
      name: 'string',
      repoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

