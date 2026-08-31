// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssetAttributesRequestUpdateCommandAssetAttributeUpdateListAttributeList extends $dara.Model {
  /**
   * @remarks
   * The property code. This value must match the AttributeCode returned by the GetAssetTypeAttributeCodes operation.
   * 
   * This parameter is required.
   * 
   * @example
   * data_level
   */
  attributeCode?: string;
  /**
   * @remarks
   * The list of property values. For a single-value property, pass one element. For a multi-value property, pass multiple elements. Pass an empty array [] to clear the property value.
   * 
   * This parameter is required.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeCode: 'AttributeCode',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeCode: 'string',
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

export class UpdateAssetAttributesRequestUpdateCommandAssetAttributeUpdateList extends $dara.Model {
  /**
   * @remarks
   * The list of properties to update.
   * 
   * This parameter is required.
   */
  attributeList?: UpdateAssetAttributesRequestUpdateCommandAssetAttributeUpdateListAttributeList[];
  /**
   * @remarks
   * The globally unique identifier (GUID) of the asset. You can obtain this value by calling operations such as ListCatalogAssets and GetTableColumnByTableGuids.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.project_a.table_orders
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: { 'type': 'array', 'itemType': UpdateAssetAttributesRequestUpdateCommandAssetAttributeUpdateListAttributeList },
      guid: 'string',
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

export class UpdateAssetAttributesRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The list of asset property updates. A maximum of 50 entries can be specified in a single request.
   * 
   * This parameter is required.
   */
  assetAttributeUpdateList?: UpdateAssetAttributesRequestUpdateCommandAssetAttributeUpdateList[];
  static names(): { [key: string]: string } {
    return {
      assetAttributeUpdateList: 'AssetAttributeUpdateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAttributeUpdateList: { 'type': 'array', 'itemType': UpdateAssetAttributesRequestUpdateCommandAssetAttributeUpdateList },
    };
  }

  validate() {
    if(Array.isArray(this.assetAttributeUpdateList)) {
      $dara.Model.validateArray(this.assetAttributeUpdateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssetAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateAssetAttributesRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateAssetAttributesRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

