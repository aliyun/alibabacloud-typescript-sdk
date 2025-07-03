// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassRequest extends $dara.Model {
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  cnClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  dnClass?: string;
  dnStorageSpace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  specifiedDNScale?: boolean;
  specifiedDNSpecMapJson?: string;
  switchTime?: string;
  switchTimeMode?: string;
  /**
   * @example
   * polarx.x4.xlarge.2e
   */
  targetDBInstanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBInstanceName: 'DBInstanceName',
      dnClass: 'DnClass',
      dnStorageSpace: 'DnStorageSpace',
      regionId: 'RegionId',
      specifiedDNScale: 'SpecifiedDNScale',
      specifiedDNSpecMapJson: 'SpecifiedDNSpecMapJson',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetDBInstanceClass: 'TargetDBInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cnClass: 'string',
      DBInstanceName: 'string',
      dnClass: 'string',
      dnStorageSpace: 'string',
      regionId: 'string',
      specifiedDNScale: 'boolean',
      specifiedDNSpecMapJson: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetDBInstanceClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

