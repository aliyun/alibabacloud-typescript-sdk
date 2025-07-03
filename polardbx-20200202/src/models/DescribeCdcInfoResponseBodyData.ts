// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdcInfoResponseBodyDataInstanceTopologyList } from "./DescribeCdcInfoResponseBodyDataInstanceTopologyList";


export class DescribeCdcInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 15
   */
  binlogPersistTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 524288000
   */
  binlogSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polarx-cdc-kernel-***
   */
  cdcNewVersion?: string;
  /**
   * @example
   * ON
   */
  checkSumSwitch?: string;
  /**
   * @example
   * true
   */
  enableCyclicReplication?: boolean;
  instanceTopologyList?: DescribeCdcInfoResponseBodyDataInstanceTopologyList[];
  /**
   * @remarks
   * server id
   * 
   * This parameter is required.
   * 
   * @example
   * 3014767486
   */
  serverId?: number;
  /**
   * @example
   * true
   */
  versionSupportMultiCdc?: boolean;
  static names(): { [key: string]: string } {
    return {
      binlogPersistTime: 'BinlogPersistTime',
      binlogSize: 'BinlogSize',
      cdcNewVersion: 'CdcNewVersion',
      checkSumSwitch: 'CheckSumSwitch',
      enableCyclicReplication: 'EnableCyclicReplication',
      instanceTopologyList: 'InstanceTopologyList',
      serverId: 'ServerId',
      versionSupportMultiCdc: 'VersionSupportMultiCdc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binlogPersistTime: 'number',
      binlogSize: 'number',
      cdcNewVersion: 'string',
      checkSumSwitch: 'string',
      enableCyclicReplication: 'boolean',
      instanceTopologyList: { 'type': 'array', 'itemType': DescribeCdcInfoResponseBodyDataInstanceTopologyList },
      serverId: 'number',
      versionSupportMultiCdc: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTopologyList)) {
      $dara.Model.validateArray(this.instanceTopologyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

