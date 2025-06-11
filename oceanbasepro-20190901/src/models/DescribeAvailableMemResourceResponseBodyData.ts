// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableMemResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum memory size for each resource unit, in GB.
   * 
   * @example
   * 10
   */
  maxMem?: number;
  /**
   * @remarks
   * The minimum memory size required for each resource unit, in GB.
   * 
   * @example
   * 5
   */
  minMem?: number;
  /**
   * @remarks
   * The maximum allowed memory usage, in GB.
   * 
   * @example
   * 10.0
   */
  safeMem?: string;
  /**
   * @remarks
   * The number of resource units in the tenant.
   * 
   * @example
   * 2
   */
  usedMem?: number;
  static names(): { [key: string]: string } {
    return {
      maxMem: 'MaxMem',
      minMem: 'MinMem',
      safeMem: 'SafeMem',
      usedMem: 'UsedMem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxMem: 'number',
      minMem: 'number',
      safeMem: 'string',
      usedMem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

