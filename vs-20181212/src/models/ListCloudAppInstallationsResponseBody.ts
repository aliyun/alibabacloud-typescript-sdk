// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudAppInstallationsResponseBodyInstallationInfos } from "./ListCloudAppInstallationsResponseBodyInstallationInfos";


export class ListCloudAppInstallationsResponseBody extends $dara.Model {
  installationInfos?: ListCloudAppInstallationsResponseBodyInstallationInfos[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      installationInfos: 'InstallationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installationInfos: { 'type': 'array', 'itemType': ListCloudAppInstallationsResponseBodyInstallationInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.installationInfos)) {
      $dara.Model.validateArray(this.installationInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

