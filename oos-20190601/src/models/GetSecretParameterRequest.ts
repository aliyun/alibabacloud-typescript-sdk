// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MySecretParameter
   */
  name?: string;
  /**
   * @remarks
   * The version number of the common parameter. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. The decrypted parameter value is returned only if this parameter is set to true. Otherwise, null is returned.
   * 
   * @example
   * false
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

