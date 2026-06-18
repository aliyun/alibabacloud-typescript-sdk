// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPerformanceDataCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The Site ID.
   * 
   * This parameter is required.
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

