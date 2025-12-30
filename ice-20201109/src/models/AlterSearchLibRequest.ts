// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterSearchLibRequest extends $dara.Model {
  /**
   * @example
   * {"faceGroupIds":"xxx1,xxx2,xx3"}
   */
  searchLibConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      searchLibConfig: 'SearchLibConfig',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchLibConfig: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

