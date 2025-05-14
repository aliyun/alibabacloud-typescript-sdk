// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAddonsUpgradeStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of component names.
   * 
   * This parameter is required.
   */
  componentIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      componentIdsShrink: 'componentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

