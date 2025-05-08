// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyPairsResponseBodyKeyPairsKeyPair extends $dara.Model {
  /**
   * @remarks
   * The time when the key pair was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * fdaf8ff7a756ef843814fc****
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * ssh-50cynkq42sgj4ej1tn78t4***
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairFingerPrint: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

