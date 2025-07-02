// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppOtaLatestVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baseVersion?: string;
  clientType?: number;
  clientUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  osType?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      clientType: 'ClientType',
      clientUid: 'ClientUid',
      osType: 'OsType',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      clientType: 'number',
      clientUid: 'string',
      osType: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

