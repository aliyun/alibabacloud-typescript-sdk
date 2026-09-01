// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicTagResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The column name of the associated data source.
   * 
   * @example
   * site_id
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the individual configuration.
   * 
   * @example
   * cfg****14352318681088
   */
  configId?: string;
  /**
   * @remarks
   * The name of the label configuration.
   * 
   * @example
   * eip
   */
  configName?: string;
  /**
   * @remarks
   * The ID of the associated data source.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 2fe4fbd8-****-****-b3e1-e92c7af083ea
   */
  organizationId?: string;
  /**
   * @remarks
   * The associated user attribute. Valid values:
   * 
   * - 0: account ID
   * - 1: account name
   * - 2: nickname within the organization
   * 
   * @example
   * 1
   */
  relatedAttribute?: number;
  /**
   * @remarks
   * The table name of the associated data source.
   * 
   * @example
   * testTable02\\"\\"
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      configId: 'ConfigId',
      configName: 'ConfigName',
      dsId: 'DsId',
      organizationId: 'OrganizationId',
      relatedAttribute: 'RelatedAttribute',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      configId: 'string',
      configName: 'string',
      dsId: 'string',
      organizationId: 'string',
      relatedAttribute: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A**********DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The label list.
   */
  result?: ListDynamicTagResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDynamicTagResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

