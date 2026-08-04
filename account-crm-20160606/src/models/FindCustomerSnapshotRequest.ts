// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindCustomerSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  infoType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      pk: 'Pk',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      pk: 'number',
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

