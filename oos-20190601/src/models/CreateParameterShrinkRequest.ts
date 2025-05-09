// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParameterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The constraints of the common parameter. By default, this parameter is null. Valid values:
   * 
   * *   AllowedValues: The value that is allowed for the common parameter. It must be an array string.
   * *   AllowedPattern: The pattern that is allowed for the common parameter. It must be a regular expression.
   * *   MinLength: The minimum length of the common parameter.
   * *   MaxLength: The maximum length of the common parameter.
   * 
   * @example
   * {
   *     "AllowedValues": [
   *         "parameter"
   *     ],
   *     "AllowedPattern": "parameter",
   *     "MinLength": 0,
   *     "MaxLength": 20
   * }
   */
  constraints?: string;
  /**
   * @remarks
   * The description of the common parameter. The description must be 1 to 200 characters in length.
   * 
   * @example
   * parameter
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter. The name must be 1 to 200 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
   * 
   * This parameter is required.
   * 
   * @example
   * MyParameter
   */
  name?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1", "k2": "v2"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The data type of the parameter. Valid values: String and StringList.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The value of the common parameter. The value must be 1 to 4096 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * parameter
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      type: 'string',
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

