// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectLogRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID in the Instances section of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the quality inspection task.
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

