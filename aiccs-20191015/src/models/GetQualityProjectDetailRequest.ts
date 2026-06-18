// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it from the console of Artificial Intelligence Cloud Call Service.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The quality inspection job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15977801
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

