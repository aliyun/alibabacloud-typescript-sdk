// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaKnowledgeBaseDocument extends $dara.Model {
  description?: string;
  docsCount?: number;
  documentLoaderName?: string;
  fileExt?: string;
  fileSize?: number;
  gmtCreate?: string;
  gmtModified?: string;
  kbUuid?: string;
  keywords?: string;
  name?: string;
  state?: number;
  summary?: string;
  textSplitterName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      docsCount: 'DocsCount',
      documentLoaderName: 'DocumentLoaderName',
      fileExt: 'FileExt',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      kbUuid: 'KbUuid',
      keywords: 'Keywords',
      name: 'Name',
      state: 'State',
      summary: 'Summary',
      textSplitterName: 'TextSplitterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      docsCount: 'number',
      documentLoaderName: 'string',
      fileExt: 'string',
      fileSize: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      kbUuid: 'string',
      keywords: 'string',
      name: 'string',
      state: 'number',
      summary: 'string',
      textSplitterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

