// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityTemplateResponseBodyQualityTemplateInfoFormPropertyList extends $dara.Model {
  /**
   * @example
   * expression
   */
  componentType?: string;
  /**
   * @example
   * col
   */
  name?: string;
  /**
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      name: 'string',
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

export class GetQualityTemplateResponseBodyQualityTemplateInfo extends $dara.Model {
  /**
   * @example
   * CONSISTENT
   */
  catalog?: string;
  /**
   * @example
   * 一致性
   */
  catalogName?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  formPropertyList?: GetQualityTemplateResponseBodyQualityTemplateInfoFormPropertyList[];
  /**
   * @example
   * 1
   */
  id?: number;
  isSystemTemplate?: boolean;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * test
   */
  modifierName?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerName?: string;
  supportAllDataSourceType?: boolean;
  supportDataSourceTypeList?: string[];
  /**
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  type?: string;
  /**
   * @example
   * 字段空值校验
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      catalogName: 'CatalogName',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      formPropertyList: 'FormPropertyList',
      id: 'Id',
      isSystemTemplate: 'IsSystemTemplate',
      modifier: 'Modifier',
      modifierName: 'ModifierName',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      supportAllDataSourceType: 'SupportAllDataSourceType',
      supportDataSourceTypeList: 'SupportDataSourceTypeList',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      catalogName: 'string',
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      formPropertyList: { 'type': 'array', 'itemType': GetQualityTemplateResponseBodyQualityTemplateInfoFormPropertyList },
      id: 'number',
      isSystemTemplate: 'boolean',
      modifier: 'string',
      modifierName: 'string',
      modifyTime: 'string',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      supportAllDataSourceType: 'boolean',
      supportDataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formPropertyList)) {
      $dara.Model.validateArray(this.formPropertyList);
    }
    if(Array.isArray(this.supportDataSourceTypeList)) {
      $dara.Model.validateArray(this.supportDataSourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  qualityTemplateInfo?: GetQualityTemplateResponseBodyQualityTemplateInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      qualityTemplateInfo: 'QualityTemplateInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      qualityTemplateInfo: GetQualityTemplateResponseBodyQualityTemplateInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.qualityTemplateInfo && typeof (this.qualityTemplateInfo as any).validate === 'function') {
      (this.qualityTemplateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

