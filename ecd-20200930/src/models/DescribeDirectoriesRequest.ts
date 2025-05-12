// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * Details of directory IDs. You can specify one or more directory IDs.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string[];
  /**
   * @remarks
   * The directory status. This parameter is equivalent to `Status`.
   * 
   * @example
   * REGISTERED
   */
  directoryStatus?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * Valid value:
   * 
   * *   SIMPLE: the convenience directory.
   * *   AD_CONNECTOR: the Active Directory (AD) directory.
   * 
   * @example
   * RAM
   */
  directoryType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The directory status.
   * 
   * Valid values:
   * 
   * *   REGISTERING: The directory is being registered.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DEREGISTERING: The directory is being deregistered.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   REGISTERED: The directory is registered.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NEEDCONFIGTRUST: A trust relationship needs to be configured for the directory.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CONFIGTRUSTFAILED: A trust relationship fails to be configured for the directory.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DEREGISTERED: The directory is deregistered.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ERROR: One or more configurations of the directory are invalid.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CONFIGTRUSTING: A trust relationship is being configured.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NEEDCONFIGUSER: Users need to be configured for the directory.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * REGISTERED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryStatus: 'DirectoryStatus',
      directoryType: 'DirectoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      directoryStatus: 'string',
      directoryType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directoryId)) {
      $dara.Model.validateArray(this.directoryId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

