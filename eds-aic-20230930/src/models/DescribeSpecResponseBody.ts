// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpecResponseBodySpecInfoModel extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 8
   */
  core?: number;
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 40
   */
  maxPhoneCount?: string;
  /**
   * @remarks
   * The memory size in GB.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 4
   */
  minPhoneCount?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 2
   */
  phoneCount?: string;
  /**
   * @remarks
   * The resolution of the cloud phone instance.
   * 
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * The specification ID.
   * 
   * @example
   * acp.basic.small
   */
  specId?: string;
  /**
   * @remarks
   * The specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * The specification type.
   * 
   * @example
   * ARM
   */
  specType?: string;
  /**
   * @remarks
   * The size of the system disk, in GB.
   * 
   * @example
   * 32
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      maxPhoneCount: 'MaxPhoneCount',
      memory: 'Memory',
      minPhoneCount: 'MinPhoneCount',
      phoneCount: 'PhoneCount',
      resolution: 'Resolution',
      specId: 'SpecId',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      maxPhoneCount: 'string',
      memory: 'number',
      minPhoneCount: 'string',
      phoneCount: 'string',
      resolution: 'string',
      specId: 'string',
      specStatus: 'string',
      specType: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to use for the next request to retrieve a new page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9888DAD-331E-5FBC-B5A0-F2445115****
   */
  requestId?: string;
  /**
   * @remarks
   * The specification information.
   */
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      specInfoModel: 'SpecInfoModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      specInfoModel: { 'type': 'array', 'itemType': DescribeSpecResponseBodySpecInfoModel },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.specInfoModel)) {
      $dara.Model.validateArray(this.specInfoModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

