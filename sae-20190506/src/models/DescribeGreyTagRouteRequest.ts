// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGreyTagRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the canary release rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  greyTagRouteId?: number;
  static names(): { [key: string]: string } {
    return {
      greyTagRouteId: 'GreyTagRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greyTagRouteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

