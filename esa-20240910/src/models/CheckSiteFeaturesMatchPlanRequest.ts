// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteFeaturesMatchPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-site-b0bivjxucjk0
   */
  newInstanceId?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 861405331573200
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      newInstanceId: 'NewInstanceId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newInstanceId: 'string',
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

