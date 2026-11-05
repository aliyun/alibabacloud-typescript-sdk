// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountPointRequest extends $dara.Model {
  /**
   * @remarks
   * The access group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The description of the mount target. The value can be up to 32 characters in length.
   * 
   * @example
   * Mount the online HDFS to the vSwitch of the VPC log cluster
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 37af8f42-2abc-4e74-889d-664f5163****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The network type of the mount target. Only VPC is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Specifies whether to use the high-performance mount target mode. Valid values:
   * - true: Uses the mode.
   * - false: Does not use the mode.
   * 
   * @example
   * false
   */
  usePerformanceMode?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-iq8fymi327krd14mt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-iq8hhsk3ymzv9m4wn****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      networkType: 'NetworkType',
      usePerformanceMode: 'UsePerformanceMode',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      networkType: 'string',
      usePerformanceMode: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

