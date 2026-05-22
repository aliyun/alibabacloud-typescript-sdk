// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginPoolShrinkRequest extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  originsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
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

