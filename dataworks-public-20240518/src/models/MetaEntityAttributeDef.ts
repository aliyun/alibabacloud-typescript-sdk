// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaEntityAttributeDef extends $dara.Model {
  /**
   * @remarks
   * Enumeration values. Required when Type is ENUM.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * Attribute description
   * 
   * @example
   * 层级描述
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the attribute appears on the product page. Default is true.
   * 
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @remarks
   * Display name. It can be up to 32 characters long.
   * 
   * @example
   * API编码
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the value is optional. Default is true.>Notice:  Validation occurs when creating an entity. If this value is false and no value is provided during creation, validation fails and an error is returned.
   * 
   * @example
   * true
   */
  isOptional?: boolean;
  /**
   * @remarks
   * Attribute identifier. It can contain letters, digits, and underscores. It must start with a letter or digit and be up to 64 characters long.
   * 
   * @example
   * apiCode
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the attribute can be used as a filter on the search page. Default is false.
   * 
   * Only attributes of type STRING, DATE, ENUM, ARRAY, INT, or BOOLEAN support this setting.
   * 
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @remarks
   * Attribute type. Supported types include STRING, TEXT, INT, FLOAT, BOOLEAN, DATE, ARRAY, ENUM, and JSON.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      description: 'Description',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      isOptional: 'IsOptional',
      name: 'Name',
      searchFilterEnabled: 'SearchFilterEnabled',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayEnabled: 'boolean',
      displayName: 'string',
      isOptional: 'boolean',
      name: 'string',
      searchFilterEnabled: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

