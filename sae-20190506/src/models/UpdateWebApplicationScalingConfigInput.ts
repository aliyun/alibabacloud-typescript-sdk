// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebApplicationScalingConfigInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maximumInstanceCount?: number;
  /**
   * @remarks
   * This parameter is required.
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

