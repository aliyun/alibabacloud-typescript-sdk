// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsJobDetailResponseBodyAPSJobDetail extends $dara.Model {
  /**
   * @remarks
   * The objects that are synchronized.
   * 
   * @example
   * {}
   */
  dbList?: string;
  /**
   * @remarks
   * The ID of the destination cluster.
   * 
   * @example
   * amv-******
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The region of the destination cluster.
   * 
   * @example
   * cn-beijing
   */
  destinationEndpointRegion?: string;
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
   * The ID of the source instance.
   * 
   * @example
   * pc-*******
   */
  sourceEndpointInstanceID?: string;
  /**
   * @remarks
   * The region of the source instance.
   * 
   * @example
   * cn-beijing
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The mode of the destination table.
   * 
   * @example
   * 0
   */
  targetTableMode?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      partitionList: 'PartitionList',
      sourceEndpointInstanceID: 'SourceEndpointInstanceID',
      sourceEndpointRegion: 'SourceEndpointRegion',
      status: 'Status',
      targetTableMode: 'TargetTableMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointRegion: 'string',
      partitionList: 'string',
      sourceEndpointInstanceID: 'string',
      sourceEndpointRegion: 'string',
      status: 'string',
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

