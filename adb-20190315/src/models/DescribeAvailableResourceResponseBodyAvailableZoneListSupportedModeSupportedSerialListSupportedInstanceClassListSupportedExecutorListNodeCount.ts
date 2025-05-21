// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorListNodeCount extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxCount?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minCount?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
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

