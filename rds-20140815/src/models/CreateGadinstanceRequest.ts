// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGADInstanceRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateGADInstanceRequestUnitNode extends $dara.Model {
  DBInstanceDescription?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  dbInstanceClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dtsConflict?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dtsInstanceClass?: string;
  engine?: string;
  engineVersion?: string;
  payType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionID?: string;
  securityIPList?: string;
  vSwitchID?: string;
  vpcID?: string;
  zoneID?: string;
  zoneIDSlave1?: string;
  zoneIDSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dbInstanceClass: 'DbInstanceClass',
      dtsConflict: 'DtsConflict',
      dtsInstanceClass: 'DtsInstanceClass',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      regionID: 'RegionID',
      securityIPList: 'SecurityIPList',
      vSwitchID: 'VSwitchID',
      vpcID: 'VpcID',
      zoneID: 'ZoneID',
      zoneIDSlave1: 'ZoneIDSlave1',
      zoneIDSlave2: 'ZoneIDSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dbInstanceClass: 'string',
      dtsConflict: 'string',
      dtsInstanceClass: 'string',
      engine: 'string',
      engineVersion: 'string',
      payType: 'string',
      regionID: 'string',
      securityIPList: 'string',
      vSwitchID: 'string',
      vpcID: 'string',
      zoneID: 'string',
      zoneIDSlave1: 'string',
      zoneIDSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGADInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  centralDBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  centralRdsDtsAdminAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  centralRdsDtsAdminPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  centralRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBList?: string;
  description?: string;
  resourceGroupId?: string;
  tag?: CreateGADInstanceRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  unitNode?: CreateGADInstanceRequestUnitNode[];
  static names(): { [key: string]: string } {
    return {
      centralDBInstanceId: 'CentralDBInstanceId',
      centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
      centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
      centralRegionId: 'CentralRegionId',
      DBList: 'DBList',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      unitNode: 'UnitNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralDBInstanceId: 'string',
      centralRdsDtsAdminAccount: 'string',
      centralRdsDtsAdminPassword: 'string',
      centralRegionId: 'string',
      DBList: 'string',
      description: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateGADInstanceRequestTag },
      unitNode: { 'type': 'array', 'itemType': CreateGADInstanceRequestUnitNode },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.unitNode)) {
      $dara.Model.validateArray(this.unitNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

