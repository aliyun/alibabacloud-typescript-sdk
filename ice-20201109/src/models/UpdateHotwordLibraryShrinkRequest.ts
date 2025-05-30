// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHotwordLibraryShrinkRequest extends $dara.Model {
  /**
   * @example
   * 存放名人的词库
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * *a0052ff71efbfd4e7e6c66*
   */
  hotwordLibraryId?: string;
  hotwordsShrink?: string;
  /**
   * @example
   * my_hotwords
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hotwordLibraryId: 'HotwordLibraryId',
      hotwordsShrink: 'Hotwords',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hotwordLibraryId: 'string',
      hotwordsShrink: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

