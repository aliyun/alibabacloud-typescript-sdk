// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSH key pair.
   * 
   * @example
   * ssh-5lywanlkih1zo9yl8eg****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the key pair. The name must conform to the following naming conventions:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter and cannot start with `http://` or `https://`.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * Before you delete a key pair, you can call the DescribeKeyPairs operation to query existing key pairs.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

