// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingCodeUploadInfoRequest extends $dara.Model {
  codeDescription?: string;
  /**
   * @remarks
   * This parameter is required.
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

