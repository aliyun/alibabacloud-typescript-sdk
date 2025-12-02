// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateComponentAssetRequestComponentAssetValues extends $dara.Model {
  /**
   * @remarks
   * Field name.
   * 
   * This parameter is required.
   * 
   * @example
   * endpoint
   */
  fieldName?: string;
  /**
   * @remarks
   * Field value.
   * 
   * This parameter is required.
   * 
   * @example
   * http://logs.aliyuncs.com
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * shanghai-log-config
   */
  componentAssetName?: string;
  /**
   * @remarks
   * Configuration information of the asset.
   * 
   * This parameter is required.
   */
  componentAssetValues?: CreateComponentAssetRequestComponentAssetValues[];
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * SLS
   */
  componentName?: string;
  /**
   * @remarks
   * The language type for receiving messages. Values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Resource directory member account ID.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      componentAssetName: 'ComponentAssetName',
      componentAssetValues: 'ComponentAssetValues',
      componentName: 'ComponentName',
      lang: 'Lang',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssetName: 'string',
      componentAssetValues: { 'type': 'array', 'itemType': CreateComponentAssetRequestComponentAssetValues },
      componentName: 'string',
      lang: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.componentAssetValues)) {
      $dara.Model.validateArray(this.componentAssetValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

