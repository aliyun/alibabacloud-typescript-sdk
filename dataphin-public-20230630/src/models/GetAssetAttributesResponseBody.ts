// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetAttributesResponseBodyDataAssetAttributeListAttributeList extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * data_level
   */
  attributeCode?: string;
  /**
   * @remarks
   * The display name of the property.
   * 
   * @example
   * Data Level
   */
  attributeName?: string;
  /**
   * @remarks
   * Indicates whether the property is required.
   */
  required?: boolean;
  /**
   * @remarks
   * The list of property values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeCode: 'AttributeCode',
      attributeName: 'AttributeName',
      required: 'Required',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeCode: 'string',
      attributeName: 'string',
      required: 'boolean',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetAttributesResponseBodyDataAssetAttributeList extends $dara.Model {
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * table_orders
   */
  assetName?: string;
  /**
   * @remarks
   * The asset type.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The list of property values.
   */
  attributeList?: GetAssetAttributesResponseBodyDataAssetAttributeListAttributeList[];
  /**
   * @remarks
   * The unique identifier of the asset.
   * 
   * @example
   * odps.project_a.table_orders
   */
  guid?: string;
  /**
   * @remarks
   * The last modified time, in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-06-01 10:30:00
   */
  lastModifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      assetType: 'AssetType',
      attributeList: 'AttributeList',
      guid: 'Guid',
      lastModifiedTime: 'LastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      assetType: 'string',
      attributeList: { 'type': 'array', 'itemType': GetAssetAttributesResponseBodyDataAssetAttributeListAttributeList },
      guid: 'string',
      lastModifiedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeList)) {
      $dara.Model.validateArray(this.attributeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of asset properties.
   */
  assetAttributeList?: GetAssetAttributesResponseBodyDataAssetAttributeList[];
  static names(): { [key: string]: string } {
    return {
      assetAttributeList: 'AssetAttributeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAttributeList: { 'type': 'array', 'itemType': GetAssetAttributesResponseBodyDataAssetAttributeList },
    };
  }

  validate() {
    if(Array.isArray(this.assetAttributeList)) {
      $dara.Model.validateArray(this.assetAttributeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAssetAttributesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAssetAttributesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

