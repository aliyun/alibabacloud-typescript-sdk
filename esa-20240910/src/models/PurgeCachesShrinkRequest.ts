// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeCachesShrinkRequest extends $dara.Model {
  contentShrink?: string;
  edgeComputePurge?: boolean;
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      edgeComputePurge: 'EdgeComputePurge',
      force: 'Force',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      edgeComputePurge: 'boolean',
      force: 'boolean',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

