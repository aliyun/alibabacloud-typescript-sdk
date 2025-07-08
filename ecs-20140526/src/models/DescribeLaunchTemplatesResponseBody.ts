// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplatesResponseBodyLaunchTemplateSets } from "./DescribeLaunchTemplatesResponseBodyLaunchTemplateSets";


export class DescribeLaunchTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried launch templates.
   */
  launchTemplateSets?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSets;
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
   * 04F0F334-1335-436C-A1D7-6C044FE12CBA
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
      launchTemplateSets: 'LaunchTemplateSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateSets: DescribeLaunchTemplatesResponseBodyLaunchTemplateSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.launchTemplateSets && typeof (this.launchTemplateSets as any).validate === 'function') {
      (this.launchTemplateSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

