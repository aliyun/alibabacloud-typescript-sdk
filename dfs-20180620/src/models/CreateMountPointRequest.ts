// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountPointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  usePerformanceMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-iq8fymi327krd14mt****
   */
  vSwitchId?: string;
  /**
   * @remarks
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

