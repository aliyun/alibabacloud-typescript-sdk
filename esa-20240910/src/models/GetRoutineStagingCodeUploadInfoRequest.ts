// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingCodeUploadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The code description.
   * 
   * @example
   * the description of code
   */
  codeDescription?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * GetRoutineStagingCodeUploadInfo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
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

