// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class Album extends $dara.Model {
  albumId?: string;
  baseFaceFile?: File;
  baseFaceGroupId?: string;
  coverFile?: File;
  createdAt?: string;
  description?: string;
  fileCount?: number;
  name?: string;
  owner?: string;
  updatedAt?: string;
  userTags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      albumId: 'album_id',
      baseFaceFile: 'base_face_file',
      baseFaceGroupId: 'base_face_group_id',
      coverFile: 'cover_file',
      createdAt: 'created_at',
      description: 'description',
      fileCount: 'file_count',
      name: 'name',
      owner: 'owner',
      updatedAt: 'updated_at',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      baseFaceFile: File,
      baseFaceGroupId: 'string',
      coverFile: File,
      createdAt: 'string',
      description: 'string',
      fileCount: 'number',
      name: 'string',
      owner: 'string',
      updatedAt: 'string',
      userTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.baseFaceFile && typeof (this.baseFaceFile as any).validate === 'function') {
      (this.baseFaceFile as any).validate();
    }
    if(this.coverFile && typeof (this.coverFile as any).validate === 'function') {
      (this.coverFile as any).validate();
    }
    if(this.userTags) {
      $dara.Model.validateMap(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

