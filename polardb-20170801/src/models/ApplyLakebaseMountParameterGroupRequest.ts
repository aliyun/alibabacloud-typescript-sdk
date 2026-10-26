// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyLakebaseMountParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter template ID. The ID starts with pagp-.
   * 
   * This parameter is required.
   * 
   * @example
   * pagp-xxx
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceId?: string;
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
      parameterGroupId: 'ParameterGroupId',
      polarFsInstanceId: 'PolarFsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
      polarFsInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

