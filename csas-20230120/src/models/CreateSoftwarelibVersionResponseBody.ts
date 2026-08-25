// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoftwarelibVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the software version that was created.
   * 
   * @example
   * softwarelib-version-21ae186e2ac9****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

