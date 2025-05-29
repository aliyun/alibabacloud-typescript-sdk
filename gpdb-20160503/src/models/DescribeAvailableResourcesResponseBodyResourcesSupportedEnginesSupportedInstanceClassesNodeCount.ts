// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of compute nodes.
   * 
   * @example
   * 256
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum number of compute nodes.
   * 
   * @example
   * 4
   */
  minCount?: string;
  /**
   * @remarks
   * The step size for adding compute nodes.
   * 
   * For example, if the value of this parameter is 4, compute nodes must be added by multiples of 4.
   * 
   * @example
   * 4
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

