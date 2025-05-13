// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  /**
   * @remarks
   * The dataset version name.
   * 
   * @example
   * v1
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

