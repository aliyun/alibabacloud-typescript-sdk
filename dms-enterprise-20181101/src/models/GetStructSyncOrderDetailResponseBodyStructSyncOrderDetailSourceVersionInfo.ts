// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * e179bbb8163dcdcfacda24858bedb4d8006ae2b8
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

