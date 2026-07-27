// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanAddOrUpdateRequestDesensRulesDesensPlan extends $dara.Model {
  /**
   * @remarks
   * The data masking method. Valid values:
   * 
   * - hash: hashing
   * 
   * - mapping: pseudonymization
   * 
   * - mask: masking
   * 
   * - charreplacement: character replacement
   * 
   * - intervalselect: interval transformation
   * 
   * - decimalpoint: rounding
   * 
   * - emptydesens: nullification
   * 
   * This parameter is required.
   * 
   * @example
   * hash
   */
  desensPlanType?: string;
  /**
   * @remarks
   * The parameters for the data masking method.
   */
  extParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      desensPlanType: 'DesensPlanType',
      extParam: 'ExtParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensPlanType: 'string',
      extParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.extParam) {
      $dara.Model.validateMap(this.extParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanAddOrUpdateRequestDesensRulesColumns extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_col_dev
   */
  column?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * This parameter is required.
   * 
   * @example
   * ODPS.ODPS
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_dev
   */
  project?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_table_dev
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'column',
      dbType: 'dbType',
      project: 'project',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      dbType: 'string',
      project: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanAddOrUpdateRequestDesensRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add a watermark. Valid values:
   * 
   * - true: Adds a watermark.
   * 
   * - false: Does not add a watermark.
   * 
   * @example
   * true
   */
  checkWatermark?: boolean;
  /**
   * @remarks
   * The sensitive data type.
   * 
   * @example
   * phone
   */
  dataType?: string;
  /**
   * @remarks
   * The configuration of the data masking method.
   * 
   * This parameter is required.
   */
  desensPlan?: DsgDesensPlanAddOrUpdateRequestDesensRulesDesensPlan;
  /**
   * @remarks
   * The data masking rule ID. You can call the [DsgDesensPlanQueryList](https://help.aliyun.com/document_detail/2786578.html) operation to obtain it.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The owner of the data masking rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The name of the data masking rule.
   * 
   * This parameter is required.
   * 
   * @example
   * phone_hash
   */
  ruleName?: string;
  /**
   * @remarks
   * The secondary data masking scenes.
   * 
   * This parameter is required.
   */
  sceneIds?: number[];
  /**
   * @remarks
   * The status of the data masking rule. Valid values:
   * 
   * - 0: Disabled
   * 
   * - 1: Enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The associated columns for masking.
   */
  columns?: DsgDesensPlanAddOrUpdateRequestDesensRulesColumns[];
  emptyNotDesens?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkWatermark: 'CheckWatermark',
      dataType: 'DataType',
      desensPlan: 'DesensPlan',
      id: 'Id',
      owner: 'Owner',
      ruleName: 'RuleName',
      sceneIds: 'SceneIds',
      status: 'Status',
      columns: 'columns',
      emptyNotDesens: 'emptyNotDesens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkWatermark: 'boolean',
      dataType: 'string',
      desensPlan: DsgDesensPlanAddOrUpdateRequestDesensRulesDesensPlan,
      id: 'number',
      owner: 'string',
      ruleName: 'string',
      sceneIds: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
      columns: { 'type': 'array', 'itemType': DsgDesensPlanAddOrUpdateRequestDesensRulesColumns },
      emptyNotDesens: 'boolean',
    };
  }

  validate() {
    if(this.desensPlan && typeof (this.desensPlan as any).validate === 'function') {
      (this.desensPlan as any).validate();
    }
    if(Array.isArray(this.sceneIds)) {
      $dara.Model.validateArray(this.sceneIds);
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanAddOrUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of data masking rules to add or update.
   * 
   * This parameter is required.
   */
  desensRules?: DsgDesensPlanAddOrUpdateRequestDesensRules[];
  static names(): { [key: string]: string } {
    return {
      desensRules: 'DesensRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensRules: { 'type': 'array', 'itemType': DsgDesensPlanAddOrUpdateRequestDesensRules },
    };
  }

  validate() {
    if(Array.isArray(this.desensRules)) {
      $dara.Model.validateArray(this.desensRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

