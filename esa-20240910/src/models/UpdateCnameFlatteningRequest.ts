// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCnameFlatteningRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  flattenMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      flattenMode: 'FlattenMode',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flattenMode: 'string',
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

