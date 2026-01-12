// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      jwtToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

