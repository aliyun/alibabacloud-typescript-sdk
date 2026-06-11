// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicTagResponseBodyResult extends $dara.Model {
  /**
   * @example
   * site_id
   */
  columnName?: string;
  /**
   * @example
   * cfg****14352318681088
   */
  configId?: string;
  /**
   * @example
   * eip
   */
  configName?: string;
  /**
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @example
   * 2fe4fbd8-****-****-b3e1-e92c7af083ea
   */
  organizationId?: string;
  /**
   * @example
   * 1
   */
  relatedAttribute?: number;
  /**
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
   * @example
   * D787E1A**********DF8D885
   */
  requestId?: string;
  result?: ListDynamicTagResponseBodyResult[];
  /**
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

