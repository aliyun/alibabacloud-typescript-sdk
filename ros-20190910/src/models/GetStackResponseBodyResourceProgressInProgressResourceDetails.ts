// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyResourceProgressInProgressResourceDetails extends $dara.Model {
  /**
   * @remarks
   * The desired progress value of the resource.
   * 
   * @example
   * 10
   */
  progressTargetValue?: number;
  /**
   * @remarks
   * The current progress value of the resource.
   * 
   * @example
   * 5
   */
  progressValue?: number;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * WaitCondition
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ROS::WaitCondition
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      progressTargetValue: 'ProgressTargetValue',
      progressValue: 'ProgressValue',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progressTargetValue: 'number',
      progressValue: 'number',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

