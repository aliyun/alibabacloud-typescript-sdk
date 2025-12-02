// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComponentAssetRequestComponentAssetValues extends $dara.Model {
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * lh_source
   */
  fieldName?: string;
  /**
   * @remarks
   * Field value.
   * 
   * @example
   * device
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

export class UpdateComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * Asset name.
   * 
   * @example
   * test_asset
   */
  componentAssetName?: string;
  /**
   * @remarks
   * Asset UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1C5F11E9-****-51F0-****-43BB312A0557
   */
  componentAssetUuid?: string;
  /**
   * @remarks
   * Configuration information of the asset.
   */
  componentAssetValues?: UpdateComponentAssetRequestComponentAssetValues[];
  /**
   * @remarks
   * The language type for the request and response. Values:
   * 
   * - **zh** (default): Chinese.
   * 
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
      componentAssetUuid: 'ComponentAssetUuid',
      componentAssetValues: 'ComponentAssetValues',
      lang: 'Lang',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssetName: 'string',
      componentAssetUuid: 'string',
      componentAssetValues: { 'type': 'array', 'itemType': UpdateComponentAssetRequestComponentAssetValues },
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

