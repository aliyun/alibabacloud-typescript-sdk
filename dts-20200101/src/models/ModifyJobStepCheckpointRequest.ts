// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobStepCheckpointRequest extends $dara.Model {
  /**
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @example
   * wn3z4ukia9wi9xu_0004_0000
   */
  jobStepId?: string;
  /**
   * @example
   * 1760406***
   */
  newCheckPoint?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2ilvoxlrd***
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobStepId: 'JobStepId',
      newCheckPoint: 'NewCheckPoint',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobStepId: 'string',
      newCheckPoint: 'number',
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

