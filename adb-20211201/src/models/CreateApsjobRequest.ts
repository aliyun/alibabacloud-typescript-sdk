// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAPSJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the synchronization job.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-xxxxx
   */
  apsJobName?: string;
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
   * The name of the database account of the destination cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxxx
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The password of the database account of the destination cluster.
   * 
   * @example
   * ******
   */
  destinationEndpointPassword?: string;
  /**
   * @remarks
   * The name of the database account of the destination cluster.
   * 
   * @example
   * ******
   */
  destinationEndpointUserName?: string;
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
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source instance or cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxx
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The password of the database account of the source instance.
   * 
   * @example
   * ******
   */
  sourceEndpointPassword?: string;
  /**
   * @remarks
   * The region ID of the source instance.
   * 
   * @example
   * cn-beijing
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The name of the database account of the source instance.
   * 
   * @example
   * xxxx
   */
  sourceEndpointUserName?: string;
  /**
   * @remarks
   * The mode of the destination table.
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

