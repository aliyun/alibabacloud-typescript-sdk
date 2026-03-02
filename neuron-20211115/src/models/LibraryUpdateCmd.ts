// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LibraryUpdateCmd extends $dara.Model {
  artifactId?: string;
  description?: string;
  groupId?: string;
  id?: number;
  name?: string;
  repoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      description: 'description',
      groupId: 'groupId',
      id: 'id',
      name: 'name',
      repoUrl: 'repoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      description: 'string',
      groupId: 'string',
      id: 'number',
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

