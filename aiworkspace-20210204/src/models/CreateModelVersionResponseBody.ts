// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 21645FCD-BAB9-5742-89AE-AEB27****B2E
   */
  requestId?: string;
  /**
   * @remarks
   * The version of the model.
   * 
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

