// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCnameFlatteningRequest extends $dara.Model {
  /**
   * @remarks
   * The flattening mode. Valid values:
   * - flatten_all: flattens all records.
   * - flatten_at_root: flattens only the root domain. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * flatten_all
   */
  flattenMode?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
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

