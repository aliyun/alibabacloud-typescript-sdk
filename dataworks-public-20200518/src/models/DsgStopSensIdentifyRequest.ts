// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgStopSensIdentifyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the sensitive data identification task. You can call the [DsgRunSensIdentify](https://help.aliyun.com/document_detail/2744039.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  jobId?: number;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

