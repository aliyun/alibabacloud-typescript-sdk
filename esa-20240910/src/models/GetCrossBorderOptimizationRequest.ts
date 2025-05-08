// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrossBorderOptimizationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 340035003106221
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

