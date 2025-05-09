// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources } from "./GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources";


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The type of objects on which you apply for permissions. Valid values:
   * 
   * *   **DB**: database
   * *   **TAB**: table
   * *   **COL**: column
   * *   **INSTANT**: instance
   * 
   * @example
   * DB
   */
  applyType?: string;
  /**
   * @remarks
   * The type of the permissions that you apply for. Valid values:
   * 
   * *   **1**: the permissions to query information.
   * *   **2**: the permissions to export information.
   * *   **3**: the permissions to query and export information.
   * *   **4**: the permissions to modify information.
   * *   **5**: the permissions to query and modify information.
   * *   **6**: the permissions to export and modify information.
   * *   **7**: the permissions to query, export, and modify information.
   * *   **8**: the permissions to log on to the database.
   * 
   * @example
   * 7
   */
  permType?: number;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources[];
  /**
   * @remarks
   * The validity duration of the permissions. Unit: seconds.
   * 
   * @example
   * 3600
   */
  seconds?: number;
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      permType: 'PermType',
      resources: 'Resources',
      seconds: 'Seconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      permType: 'number',
      resources: { 'type': 'array', 'itemType': GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources },
      seconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

