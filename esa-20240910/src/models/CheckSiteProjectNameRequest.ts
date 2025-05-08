// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteProjectNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the real-time log delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * user_log
   */
  projectName?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

