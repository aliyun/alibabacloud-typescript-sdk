// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAPSJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-xxxxx
   */
  apsJobName?: string;
  /**
   * @remarks
   * The list of synchronization objects.
   * 
   * This parameter is required.
   * 
   * @example
   * {"EntireInstance":true}
   */
  dbList?: string;
  /**
   * @remarks
   * The instance ID of the destination database.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxxx
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The password of the destination instance.
   * 
   * @example
   * ******
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The username of the destination instance.
   * 
   * @example
   * ******
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * The list of partitions.
   * 
   * @example
   * {}
   */
  partitionList?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the source database.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxx
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The password of the source endpoint.
   * 
   * @example
   * ******
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The region of the source database.
   * 
   * @example
   * cn-beijing
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The username of the source endpoint.
   * 
   * @example
   * xxxx
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The destination table mode.
   * 
   * @example
   * 1
   */
  targetTableMode?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobName: 'ApsJobName',
      dbList: 'DbList',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointPassword: 'DestinationEndpointPassword',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      partitionList: 'PartitionList',
      regionId: 'RegionId',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointPassword: 'SourceEndpointPassword',
      sourceEndpointRegion: 'SourceEndpointRegion',
      sourceEndpointUserName: 'SourceEndpointUserName',
      targetTableMode: 'TargetTableMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobName: 'string',
      dbList: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointPassword: 'string',
      destinationEndpointUserName: 'string',
      partitionList: 'string',
      regionId: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointPassword: 'string',
      sourceEndpointRegion: 'string',
      sourceEndpointUserName: 'string',
      targetTableMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

