// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupAssociateProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of workspace IDs.
   */
  projectIdList?: number[];
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectIdList: 'ProjectIdList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIdList: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.projectIdList)) {
      $dara.Model.validateArray(this.projectIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

