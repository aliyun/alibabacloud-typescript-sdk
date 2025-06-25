// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOtaTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-53fvrq1oanz6c****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The type of the OTA update task.
   * 
   * Valid values:
   * 
   * *   Fota: update of the system components of Alibaba Cloud Workspace
   * 
   * This parameter is required.
   * 
   * @example
   * Fota
   */
  otaType?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      otaType: 'OtaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      otaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

