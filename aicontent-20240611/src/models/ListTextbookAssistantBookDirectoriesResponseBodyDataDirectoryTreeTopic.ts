// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantBookDirectoriesResponseBodyDataDirectoryTreeTopic extends $dara.Model {
  /**
   * @example
   * 1323
   */
  labelId?: string;
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'labelId',
      labelName: 'labelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'string',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

