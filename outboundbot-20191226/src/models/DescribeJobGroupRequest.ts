// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobGroupRequest extends $dara.Model {
  briefTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 46a9ad0c-3e11-44da-a9a7-2c21bf5ce185
   */
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      briefTypes: 'BriefTypes',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefTypes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.briefTypes)) {
      $dara.Model.validateArray(this.briefTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

