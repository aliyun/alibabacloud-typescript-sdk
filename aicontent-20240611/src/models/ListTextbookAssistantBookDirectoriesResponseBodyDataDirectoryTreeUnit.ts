// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection } from "./ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection";
import { ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic } from "./ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic";


export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnit extends $dara.Model {
  directoryId?: string;
  directoryName?: string;
  section?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection[];
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      section: 'section',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryName: 'string',
      section: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection },
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitTopic },
    };
  }

  validate() {
    if(Array.isArray(this.section)) {
      $dara.Model.validateArray(this.section);
    }
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

