// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReverseTwoWayDirectionRequest extends $dara.Model {
  /**
   * @example
   * dtsldy114cy24f****
   */
  dtsInstanceId?: string;
  /**
   * @example
   * false
   */
  ignoreErrorSubJob?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      ignoreErrorSubJob: 'IgnoreErrorSubJob',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      ignoreErrorSubJob: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

