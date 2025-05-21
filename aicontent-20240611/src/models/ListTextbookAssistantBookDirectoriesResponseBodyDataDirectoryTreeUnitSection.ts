// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic } from "./ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic";


export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSection extends $dara.Model {
  children?: any;
  directoryId?: string;
  directoryName?: string;
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic[];
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: 'any',
      directoryId: 'string',
      directoryName: 'string',
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeUnitSectionTopic },
    };
  }

  validate() {
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

