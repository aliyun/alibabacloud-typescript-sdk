// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSitePauseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paused?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      paused: 'Paused',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paused: 'boolean',
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

