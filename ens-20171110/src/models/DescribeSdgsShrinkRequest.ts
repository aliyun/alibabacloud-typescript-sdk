// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The AIC instance ID to be queried.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The IDs of SDGs that you want to query. By default, all SDGs are queried.
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

