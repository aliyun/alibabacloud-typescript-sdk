// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCnameFlatteningRequest extends $dara.Model {
  /**
   * @remarks
   * Flattening mode. Possible values:
   * - flatten_all: Flatten all.
   * - flatten_at_root: Flatten only the root domain. The default is to flatten the root domain.
   * 
   * This parameter is required.
   * 
   * @example
   * flatten_all
   */
  flattenMode?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
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

