// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsJobDetailResponseBodyAPSJobDetail extends $dara.Model {
  /**
   * @remarks
   * The list of synchronization objects.
   * 
   * @example
   * {}
   */
  dbList?: string;
  /**
   * @remarks
   * The instance ID of the destination database.
   * 
   * @example
   * amv-******
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The region of the target instance.
   * 
   * @example
   * cn-beijing
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The partition list.
   * 
   * @example
   * {}
   */
  partitionList?: string;
  /**
   * @remarks
   * The instance ID of the source database.
   * 
   * @example
   * pc-*******
   */
  sourceEndpointInstanceID?: string;
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
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The target table mode.
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

export class DescribeApsJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details.
   * 
   * @example
   * {"SourceEndpointRegion":"cn-beijing","DestinationEndpointRegion":"cn-beijing","Status":"Running","TargetTableMode":"0"}
   */
  APSJobDetail?: DescribeApsJobDetailResponseBodyAPSJobDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-E606-4A42-BF6D-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      APSJobDetail: 'APSJobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APSJobDetail: DescribeApsJobDetailResponseBodyAPSJobDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.APSJobDetail && typeof (this.APSJobDetail as any).validate === 'function') {
      (this.APSJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

