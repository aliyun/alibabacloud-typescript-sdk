// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the common parameter. The name can be up to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m*****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

