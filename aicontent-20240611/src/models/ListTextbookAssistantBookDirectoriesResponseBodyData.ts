// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree } from "./ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree";
import { ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo } from "./ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo";


export class ListTextbookAssistantBookDirectoriesResponseBodyData extends $dara.Model {
  directoryTree?: ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree[];
  editionInfo?: ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo;
  static names(): { [key: string]: string } {
    return {
      directoryTree: 'directoryTree',
      editionInfo: 'editionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryTree: { 'type': 'array', 'itemType': ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTree },
      editionInfo: ListTextbookAssistantBookDirectoriesResponseBodyDataEditionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.directoryTree)) {
      $dara.Model.validateArray(this.directoryTree);
    }
    if(this.editionInfo && typeof (this.editionInfo as any).validate === 'function') {
      (this.editionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

