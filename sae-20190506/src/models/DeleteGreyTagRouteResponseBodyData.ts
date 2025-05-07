// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGreyTagRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the canary release rule. The ID is globally unique.
   * 
   * @example
   * 16
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

