// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize extends $dara.Model {
  /**
   * @remarks
   * The maximum storage capacity of each compute node.
   * 
   * @example
   * 1000
   */
  maxCount?: string;
  /**
   * @remarks
   * The minimum storage capacity of each compute node.
   * 
   * @example
   * 50
   */
  minCount?: string;
  /**
   * @remarks
   * The step size for adding storage capacity for compute nodes.
   * 
   * @example
   * 50
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

