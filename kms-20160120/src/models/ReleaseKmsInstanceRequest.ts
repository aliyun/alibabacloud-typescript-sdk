// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseKmsInstanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  forceDeleteWithoutBackup?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kst-hzz6****
   */
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forceDeleteWithoutBackup: 'ForceDeleteWithoutBackup',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDeleteWithoutBackup: 'string',
      kmsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

