// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class UpdateHotwordLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the hotword library. It can be up to 200 characters in length.
   * 
   * @example
   * 存放名人的词库
   */
  description?: string;
  /**
   * @remarks
   * The ID of the hotword library.
   * 
   * This parameter is required.
   * 
   * @example
   * *a0052ff71efbfd4e7e6c66*
   */
  hotwordLibraryId?: string;
  /**
   * @remarks
   * The hotword list. You can add up to 300 hotword entries to a single library.
   */
  hotwords?: Hotword[];
  /**
   * @remarks
   * The name of the hotword library. It can be up to 100 characters in length.
   * 
   * @example
   * my_hotwords
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hotwordLibraryId: 'HotwordLibraryId',
      hotwords: 'Hotwords',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotwordLibraryId: 'string',
      hotwords: { 'type': 'array', 'itemType': Hotword },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotwords)) {
      $dara.Model.validateArray(this.hotwords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

