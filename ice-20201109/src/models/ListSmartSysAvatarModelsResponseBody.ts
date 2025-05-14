// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList } from "./ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList";


export class ListSmartSysAvatarModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried digital humans.
   */
  smartSysAvatarModelList?: ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList[];
  /**
   * @remarks
   * The total number of system digital human images returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartSysAvatarModelList: 'SmartSysAvatarModelList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartSysAvatarModelList: { 'type': 'array', 'itemType': ListSmartSysAvatarModelsResponseBodySmartSysAvatarModelList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smartSysAvatarModelList)) {
      $dara.Model.validateArray(this.smartSysAvatarModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

