// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets } from "./DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets";


export class DescribeLaunchTemplateVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the launch template versions.
   */
  launchTemplateVersionSets?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3989ED0C-20A1-4351-A127-2067FF8390AX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of launch templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersionSets: 'LaunchTemplateVersionSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersionSets: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.launchTemplateVersionSets && typeof (this.launchTemplateVersionSets as any).validate === 'function') {
      (this.launchTemplateVersionSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

