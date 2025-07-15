// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpecResponseBodySpecInfoModel extends $dara.Model {
  /**
   * @remarks
   * Number of CPU cores.
   * 
   * @example
   * 8
   */
  core?: number;
  /**
   * @remarks
   * The maximum number of cloud phone instances.
   * 
   * @example
   * 40
   */
  maxPhoneCount?: string;
  /**
   * @remarks
   * Memory size.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The minimum number of cloud phone instances.
   * 
   * @example
   * 4
   */
  minPhoneCount?: string;
  /**
   * @example
   * 2
   */
  phoneCount?: string;
  /**
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * Specification ID.
   * 
   * @example
   * acp.basic.small
   */
  specId?: string;
  /**
   * @remarks
   * Specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * Specification type.
   * 
   * @example
   * ARM
   */
  specType?: string;
  /**
   * @remarks
   * System disk size, in GB.
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
   * Indicates the current read position returned by this call. An empty value means that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9888DAD-331E-5FBC-B5A0-F2445115****
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications.
   */
  specInfoModel?: DescribeSpecResponseBodySpecInfoModel[];
  /**
   * @remarks
   * Total number of items.
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

