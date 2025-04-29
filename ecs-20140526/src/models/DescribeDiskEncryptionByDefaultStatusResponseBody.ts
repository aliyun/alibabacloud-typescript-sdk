// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskEncryptionByDefaultStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether account-level default encryption of EBS resources is enabled in the region. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'Encrypted',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

