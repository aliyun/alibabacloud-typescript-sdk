// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsKeysResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * TestAlias
   */
  alias?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the key in KMS.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:key/05754286-3ba2-4fa6-8d41-4323aca6****
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * 05754286-3ba2-4fa6-8d41-4323aca6****
   */
  keyId?: string;
  /**
   * @remarks
   * The type of the key.
   * 
   * @example
   * ServiceKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      arn: 'Arn',
      keyId: 'KeyId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      arn: 'string',
      keyId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

