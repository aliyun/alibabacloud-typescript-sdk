// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountListNodeCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of compute nodes.
   * 
   * @example
   * 200
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum number of compute nodes.
   * 
   * @example
   * 1
   */
  minCount?: string;
  /**
   * @remarks
   * The step size.
   * 
   * @example
   * 1
   */
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

