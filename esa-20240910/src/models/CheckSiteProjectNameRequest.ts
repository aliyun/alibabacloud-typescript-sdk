// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteProjectNameRequest extends $dara.Model {
  /**
   * @remarks
   * The real-time log project name.
   * 
   * > Allowed character set (hyphens only, no underscores), length range, and naming rule examples (such as \\"ali-dcdn-log-56\\")
   * 
   * This parameter is required.
   * 
   * @example
   * ali-dcdn-log-56
   */
  projectName?: string;
  /**
   * @remarks
   * The site ID. You can call [ListSites](https://help.aliyun.com/document_detail/2850189.html) to obtain the site ID.
   * 
   * @example
   * 12312312213212
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
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

