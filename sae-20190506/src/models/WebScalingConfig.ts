// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebScalingConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 10
   */
  maximumInstanceCount?: number;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minimumInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'MaximumInstanceCount',
      minimumInstanceCount: 'MinimumInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

