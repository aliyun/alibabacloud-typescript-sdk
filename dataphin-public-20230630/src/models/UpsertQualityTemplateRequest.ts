// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityTemplateRequestUpsertCommandFormPropertyList extends $dara.Model {
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

export class UpsertQualityTemplateRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CONSISTENT
   */
  catalog?: string;
  /**
   * @example
   * test
   */
  description?: string;
  formPropertyList?: UpsertQualityTemplateRequestUpsertCommandFormPropertyList[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  supportDataSourceTypeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      description: 'Description',
      formPropertyList: 'FormPropertyList',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      supportDataSourceTypeList: 'SupportDataSourceTypeList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      description: 'string',
      formPropertyList: { 'type': 'array', 'itemType': UpsertQualityTemplateRequestUpsertCommandFormPropertyList },
      id: 'number',
      name: 'string',
      owner: 'string',
      supportDataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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

export class UpsertQualityTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityTemplateRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      upsertCommand: UpsertQualityTemplateRequestUpsertCommand,
    };
  }

  validate() {
    if(this.upsertCommand && typeof (this.upsertCommand as any).validate === 'function') {
      (this.upsertCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

