// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListInputLineageList extends $dara.Model {
  /**
   * @remarks
   * The list of lineage columns.
   * 
   * This parameter is required.
   */
  columnList?: string[];
  /**
   * @remarks
   * The environment. Valid values: prod, dev, and auto.
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * Specifies whether to select the full table.
   * 
   * This parameter is required.
   */
  fullTable?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * t_input
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      env: 'Env',
      fullTable: 'FullTable',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': 'string' },
      env: 'string',
      fullTable: 'boolean',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListOutputLineageList extends $dara.Model {
  /**
   * @remarks
   * The list of lineage columns.
   * 
   * This parameter is required.
   */
  columnList?: string[];
  /**
   * @remarks
   * The environment. Valid values: prod, dev, and auto.
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * Specifies whether to select the full table.
   * 
   * This parameter is required.
   */
  fullTable?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * t_output
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      env: 'Env',
      fullTable: 'FullTable',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': 'string' },
      env: 'string',
      fullTable: 'boolean',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnList)) {
      $dara.Model.validateArray(this.columnList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupList extends $dara.Model {
  /**
   * @remarks
   * The collection of input tables for lineage.
   * 
   * This parameter is required.
   */
  inputLineageList?: UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListInputLineageList[];
  /**
   * @remarks
   * The collection of output tables for lineage.
   * 
   * This parameter is required.
   */
  outputLineageList?: UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListOutputLineageList[];
  static names(): { [key: string]: string } {
    return {
      inputLineageList: 'InputLineageList',
      outputLineageList: 'OutputLineageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputLineageList: { 'type': 'array', 'itemType': UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListInputLineageList },
      outputLineageList: { 'type': 'array', 'itemType': UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListOutputLineageList },
    };
  }

  validate() {
    if(Array.isArray(this.inputLineageList)) {
      $dara.Model.validateArray(this.inputLineageList);
    }
    if(Array.isArray(this.outputLineageList)) {
      $dara.Model.validateArray(this.outputLineageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The node ID in the task directory tree.
   * 
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * The list of lineage groups.
   * 
   * This parameter is required.
   */
  lineageGroupList?: UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupList[];
  /**
   * @remarks
   * The project to which the task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      lineageGroupList: 'LineageGroupList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      lineageGroupList: { 'type': 'array', 'itemType': UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupList },
      projectId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lineageGroupList)) {
      $dara.Model.validateArray(this.lineageGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequest extends $dara.Model {
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
  updateCommand?: UpdateBatchTaskUdfLineagesRequestUpdateCommand;
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
      updateCommand: UpdateBatchTaskUdfLineagesRequestUpdateCommand,
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

