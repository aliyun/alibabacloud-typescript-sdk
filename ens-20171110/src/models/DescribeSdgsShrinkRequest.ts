// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AIC instance IDs to query.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The list of SDG IDs to query.
   */
  SDGIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      SDGIdsShrink: 'SDGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      SDGIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

