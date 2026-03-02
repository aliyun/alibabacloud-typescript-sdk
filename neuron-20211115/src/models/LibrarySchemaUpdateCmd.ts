// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LibrarySchemaUpdateCmd extends $dara.Model {
  artifactId?: string;
  description?: string;
  gitGroup?: string;
  groupId?: string;
  id?: number;
  libraryId?: number;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      description: 'description',
      gitGroup: 'gitGroup',
      groupId: 'groupId',
      id: 'id',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      description: 'string',
      gitGroup: 'string',
      groupId: 'string',
      id: 'number',
      libraryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

