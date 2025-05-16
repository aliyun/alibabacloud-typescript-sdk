// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic } from "./ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic";


export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree extends $dara.Model {
  /**
   * @example
   * 05758807ed8e11eebe6e0c42a106bb02
   */
  directoryId?: string;
  /**
   * @example
   * 2 Jobs
   */
  directoryName?: string;
  topic?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      directoryName: 'directoryName',
      topic: 'topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryName: 'string',
      topic: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic },
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

