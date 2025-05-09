// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnlineDDLProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OnlineDDL SQL task details. You can call the [ListDBTaskSQLJobDetail](https://help.aliyun.com/document_detail/207073.html) operation to obtain the task detail ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  jobDetailId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobDetailId: 'JobDetailId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDetailId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

