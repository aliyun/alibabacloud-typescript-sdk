// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiSchemaUsageRequest extends $dara.Model {
  /**
   * @example
   * 1159101787****
   */
  siteId?: number;
  /**
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

