// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaEntityAttributeDef extends $dara.Model {
  allowedValues?: string[];
  description?: string;
  /**
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @example
   * API编码
   */
  displayName?: string;
  /**
   * @example
   * true
   */
  isOptional?: boolean;
  /**
   * @example
   * apiCode
   */
  name?: string;
  /**
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
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

