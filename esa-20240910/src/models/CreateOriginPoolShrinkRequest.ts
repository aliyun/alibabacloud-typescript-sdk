// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginPoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the origin pool is enabled.
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the origin pool. The name must be unique within a site.
   * 
   * This parameter is required.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * The list of origins to add to the origin pool. Use an array to specify multiple origins.
   */
  originsShrink?: string;
  /**
   * @remarks
   * The site ID. To obtain this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 21655860979****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      name: 'Name',
      originsShrink: 'Origins',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      name: 'string',
      originsShrink: 'string',
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

