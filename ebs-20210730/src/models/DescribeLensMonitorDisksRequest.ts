// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLensMonitorDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the disk. Valid values:
   * - cloud
   * - cloud_efficiency
   * - cloud_ssd
   * - cloud_essd
   * - cloud_auto
   * - cloud_essd_entry
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * Regular matching fuzzy query to filter cloud disk IDs.
   * 
   * @example
   * d-cd40hxfu0v**
   */
  diskIdPattern?: string;
  /**
   * @remarks
   * The list of disks.
   * 
   * @example
   * [\\"d-1\\", \\"d-2\\"]
   */
  diskIds?: string[];
  /**
   * @remarks
   * Event tags of the disk, which are used to filter the disks on which the events associated with the specified tags occurred in the previous 24 hours. Valid values:
   * 
   * *   NoSnapshot: specifies the event that is triggered because no snapshot is created for the disk to protect data on the disk.
   * *   BurstIOTriggered: specifies the event that is triggered when a burst I/O operation is performed on the disk.
   * *   CostOptimizationNeeded: specifies the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: specifies the event that is triggered if the disk specifications do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: specifies the event that is triggered if the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: specifies the event that is triggered when an I/O hang occurs on the disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of IOPS on the instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of BPS on the instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of IOPS on the disk reaches the upper limit of the instance.
   * *   DiskBPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of BPS on the disk reaches the upper limit of the instance.
   * *   DiskIOPSExceedDiskMaxLimit: specifies the event that is triggered when the number of IOPS on the disk reaches the upper limit of the disk.
   * *   DiskBPSExceedDiskMaxLimit: specifies the event that is triggered when the number of BPS on the disk reaches the upper limit of the disk.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query to retrieve more results.
   * 
   * >The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
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
      diskCategory: 'DiskCategory',
      diskIdPattern: 'DiskIdPattern',
      diskIds: 'DiskIds',
      lensTags: 'LensTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskIdPattern: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      lensTags: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(Array.isArray(this.lensTags)) {
      $dara.Model.validateArray(this.lensTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

