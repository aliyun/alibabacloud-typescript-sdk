// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHotExpandTaskRequestExtendedMapping extends $dara.Model {
  /**
   * @remarks
   * The name of the source physical database.
   * 
   * @example
   * test
   */
  srcDb?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance to which the source physical database belongs.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  srcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      srcDb: 'SrcDb',
      srcInstanceId: 'SrcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcDb: 'string',
      srcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestInstanceDbMapping extends $dara.Model {
  /**
   * @remarks
   * The name of the hot-spot database.
   * 
   * This parameter is required.
   * 
   * @example
   * hot_test_****_****
   */
  dbList?: string;
  /**
   * @remarks
   * The name of the ApsaraDB RDS instance to which the hot-spot database belongs.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestMapping extends $dara.Model {
  /**
   * @remarks
   * The shard key used to split the database to which the associated table belongs.
   * 
   * @example
   * platform
   */
  dbShardColumn?: string;
  /**
   * @remarks
   * The name of the hot-spot database.
   * 
   * @example
   * hot_test_****_****
   */
  hotDbName?: string;
  /**
   * @remarks
   * The name of the hot-spot table. The name must be prefixed with the name of a logical table.
   * 
   * @example
   * test_table_*****
   */
  hotTableName?: string;
  /**
   * @remarks
   * The name of the logical table on which you want to perform hot-spot scale-out.
   * 
   * @example
   * test_table
   */
  logicTable?: string;
  /**
   * @remarks
   * The value of the shard key used to split a database.
   * 
   * @example
   * test
   */
  shardDbValue?: string;
  /**
   * @remarks
   * The value of the shard key used to split a table.
   * 
   * @example
   * test
   */
  shardTbValue?: string;
  /**
   * @remarks
   * The shard key used to split an associated table.
   * 
   * @example
   * platform
   */
  tbShardColumn?: string;
  static names(): { [key: string]: string } {
    return {
      dbShardColumn: 'DbShardColumn',
      hotDbName: 'HotDbName',
      hotTableName: 'HotTableName',
      logicTable: 'LogicTable',
      shardDbValue: 'ShardDbValue',
      shardTbValue: 'ShardTbValue',
      tbShardColumn: 'TbShardColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbShardColumn: 'string',
      hotDbName: 'string',
      hotTableName: 'string',
      logicTable: 'string',
      shardDbValue: 'string',
      shardTbValue: 'string',
      tbShardColumn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestSupperAccountMapping extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance that has the privileged account.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the privileged account of the ApsaraDB RDS instance.
   * 
   * @example
   * test
   */
  supperAccount?: string;
  /**
   * @remarks
   * The password of the privileged account of the ApsaraDB RDS instance.
   * 
   * @example
   * 11111111
   */
  supperPassword?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      supperAccount: 'SupperAccount',
      supperPassword: 'SupperPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      supperAccount: 'string',
      supperPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The information about the database on which you want to perform hot-spot scale-out.
   * 
   * This parameter is required.
   */
  extendedMapping?: SubmitHotExpandTaskRequestExtendedMapping[];
  /**
   * @remarks
   * The information about the instance to which the hot-spot database belongs.
   * 
   * This parameter is required.
   */
  instanceDbMapping?: SubmitHotExpandTaskRequestInstanceDbMapping[];
  /**
   * @remarks
   * The information about the hot-spot database.
   * 
   * This parameter is required.
   */
  mapping?: SubmitHotExpandTaskRequestMapping[];
  /**
   * @remarks
   * The information about the privileged account.
   */
  supperAccountMapping?: SubmitHotExpandTaskRequestSupperAccountMapping[];
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  taskDesc?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      extendedMapping: 'ExtendedMapping',
      instanceDbMapping: 'InstanceDbMapping',
      mapping: 'Mapping',
      supperAccountMapping: 'SupperAccountMapping',
      taskDesc: 'TaskDesc',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      extendedMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestExtendedMapping },
      instanceDbMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestInstanceDbMapping },
      mapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestMapping },
      supperAccountMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestSupperAccountMapping },
      taskDesc: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedMapping)) {
      $dara.Model.validateArray(this.extendedMapping);
    }
    if(Array.isArray(this.instanceDbMapping)) {
      $dara.Model.validateArray(this.instanceDbMapping);
    }
    if(Array.isArray(this.mapping)) {
      $dara.Model.validateArray(this.mapping);
    }
    if(Array.isArray(this.supperAccountMapping)) {
      $dara.Model.validateArray(this.supperAccountMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

