// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoriesResponseBodyMemories extends $dara.Model {
  description?: string;
  /**
   * @example
   * 3fc531f4519444beaafffa4538f60667
   */
  memoryId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      memoryId: 'memoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      memoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

