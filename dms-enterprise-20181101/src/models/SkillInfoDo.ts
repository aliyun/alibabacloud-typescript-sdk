// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkillInfoDO extends $dara.Model {
  category?: string;
  compatibility?: string;
  description?: string;
  displayName?: string;
  installCount?: string;
  name?: string;
  source?: string;
  sourceType?: string;
  tags?: string;
  updatedAt?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      compatibility: 'Compatibility',
      description: 'Description',
      displayName: 'DisplayName',
      installCount: 'InstallCount',
      name: 'Name',
      source: 'Source',
      sourceType: 'SourceType',
      tags: 'Tags',
      updatedAt: 'UpdatedAt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      compatibility: 'string',
      description: 'string',
      displayName: 'string',
      installCount: 'string',
      name: 'string',
      source: 'string',
      sourceType: 'string',
      tags: 'string',
      updatedAt: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

