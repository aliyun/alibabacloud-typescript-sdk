// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelRepoBuildRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * 74FDBA62-30C0-4F22-BE7B-F1D36FD1****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

