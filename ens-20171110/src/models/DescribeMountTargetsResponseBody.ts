// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountTargetsResponseBodyMountTargets } from "./DescribeMountTargetsResponseBodyMountTargets";


export class DescribeMountTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about mount targets.
   */
  mountTargets?: DescribeMountTargetsResponseBodyMountTargets[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 762DD527-358B-1E48-8005-CCE3ED4EB9E0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of mount targets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mountTargets)) {
      $dara.Model.validateArray(this.mountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

