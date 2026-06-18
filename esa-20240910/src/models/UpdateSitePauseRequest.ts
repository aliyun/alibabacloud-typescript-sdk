// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSitePauseRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to pause proxy acceleration for the site. If set to `true`, DNS queries for the site return the record values directly to the client. Valid values:
   * 
   * - true: Pauses proxy acceleration for the site.
   * 
   * - false: Resumes proxy acceleration for the site.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @remarks
   * The site ID. To obtain this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      paused: 'Paused',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paused: 'boolean',
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

