// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-bj1xxxxxx
   */
  apsJobId?: string;
  /**
   * @remarks
   * The objects to be synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * {"EntireInstance":true}
   */
  dbList?: string;
  /**
   * @remarks
   * The partitions.
   * 
   * @example
   * {}
   */
  partitionList?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobId: 'ApsJobId',
      dbList: 'DbList',
      partitionList: 'PartitionList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobId: 'string',
      dbList: 'string',
      partitionList: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

