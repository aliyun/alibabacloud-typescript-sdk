// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDsReportsRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * Task group ID
   * 
   * This parameter is required.
   * 
   * @example
   * 9eb8fe4f-b286-4834-9688-2c9b171e223e
   */
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

