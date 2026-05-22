// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteProjectNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
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

