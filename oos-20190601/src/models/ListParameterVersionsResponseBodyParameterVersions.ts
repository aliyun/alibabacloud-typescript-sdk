// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterVersionsResponseBodyParameterVersions extends $dara.Model {
  /**
   * @remarks
   * The version number of the common parameter.
   * 
   * @example
   * 1
   */
  parameterVersion?: number;
  /**
   * @remarks
   * The user who updated the common parameter.
   * 
   * @example
   * root(130900000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the common parameter was last updated.
   * 
   * @example
   * 2020-09-07T11:37:29Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The value of the common parameter.
   * 
   * @example
   * MyParameter
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

