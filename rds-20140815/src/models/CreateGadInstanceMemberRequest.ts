// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadInstanceMemberRequestUnitNode extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  regionID?: string;
  securityIPList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchID?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class CreateGadInstanceMemberRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  gadInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  unitNode?: CreateGadInstanceMemberRequestUnitNode[];
  static names(): { [key: string]: string } {
    return {
      centralDBInstanceId: 'CentralDBInstanceId',
      centralRdsDtsAdminAccount: 'CentralRdsDtsAdminAccount',
      centralRdsDtsAdminPassword: 'CentralRdsDtsAdminPassword',
      centralRegionId: 'CentralRegionId',
      DBList: 'DBList',
      gadInstanceId: 'GadInstanceId',
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
      gadInstanceId: 'string',
      unitNode: { 'type': 'array', 'itemType': CreateGadInstanceMemberRequestUnitNode },
    };
  }

  validate() {
    if(Array.isArray(this.unitNode)) {
      $dara.Model.validateArray(this.unitNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

