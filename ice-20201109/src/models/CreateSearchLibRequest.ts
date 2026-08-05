// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSearchLibRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the search library. The value is in JSON string format. Fields:
   * - faceGroupIds: the IDs of self-registered face libraries created by calling CreateRecognitionLib. A maximum of three self-registered face library IDs are supported, separated by commas (,).
   * 
   * @example
   * {"faceGroupIds":"xxx1,xxx2,xx3"}
   */
  searchLibConfig?: string;
  /**
   * @remarks
   * The name of the search library. The name must be a combination of letters and digits. For network monitoring camera (IPC) scenarios, the prefix must be "IPCamera_". For other scenarios, you can customize the name.
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

