// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlterSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the search library, in JSON string format. The fields include the following:
   * 
   * - faceGroupIds: The IDs of custom face recognition libraries. You can create these libraries by calling the CreateRecognitionLib operation. You can specify up to three library IDs, separated by commas (,).
   * 
   * @example
   * {"faceGroupIds":"xxx1,xxx2,xx3"}
   */
  searchLibConfig?: string;
  /**
   * @remarks
   * The search library.
   * 
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

