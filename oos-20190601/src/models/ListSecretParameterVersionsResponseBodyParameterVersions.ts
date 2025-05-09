// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretParameterVersionsResponseBodyParameterVersions extends $dara.Model {
  /**
   * @remarks
   * The version number of the encryption parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The user who updated the encryption parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the encryption parameter was updated.
   * 
   * @example
   * 2020-09-01T08:01:43Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the encryption parameter.
   * 
   * @example
   * SecretParameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      parameterVersion: 'ParameterVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterVersion: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

