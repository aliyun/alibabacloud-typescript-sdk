// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginPoolShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the origin address pool is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the origin address pool, which must be unique within a site.
   * 
   * This parameter is required.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Information about the origins added to the origin address pool, with multiple origins passed as an array.
   */
  originsShrink?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
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

