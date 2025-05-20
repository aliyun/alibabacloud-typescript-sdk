// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeFile extends $dara.Model {
  creatorId?: string;
  driveId?: string;
  driveName?: string;
  fileCategory?: string;
  fileCreatedAt?: number;
  fileCreatorId?: string;
  fileId?: string;
  fileImageTime?: number;
  fileLastModifierId?: string;
  fileLastModifierType?: string;
  fileName?: string;
  fileNamePath?: string;
  fileSize?: number;
  fileUpdatedAt?: number;
  joinedAt?: number;
  knowledgeBaseId?: string;
  knowledgeCategoryId?: string;
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'creator_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      fileCategory: 'file_category',
      fileCreatedAt: 'file_created_at',
      fileCreatorId: 'file_creator_id',
      fileId: 'file_id',
      fileImageTime: 'file_image_time',
      fileLastModifierId: 'file_last_modifier_id',
      fileLastModifierType: 'file_last_modifier_type',
      fileName: 'file_name',
      fileNamePath: 'file_name_path',
      fileSize: 'file_size',
      fileUpdatedAt: 'file_updated_at',
      joinedAt: 'joined_at',
      knowledgeBaseId: 'knowledge_base_id',
      knowledgeCategoryId: 'knowledge_category_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      driveId: 'string',
      driveName: 'string',
      fileCategory: 'string',
      fileCreatedAt: 'number',
      fileCreatorId: 'string',
      fileId: 'string',
      fileImageTime: 'number',
      fileLastModifierId: 'string',
      fileLastModifierType: 'string',
      fileName: 'string',
      fileNamePath: 'string',
      fileSize: 'number',
      fileUpdatedAt: 'number',
      joinedAt: 'number',
      knowledgeBaseId: 'string',
      knowledgeCategoryId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

