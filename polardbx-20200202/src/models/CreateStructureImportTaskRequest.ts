// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructureImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration information.
   * 
   * @example
   * [{\\"schemaName\\":\\"transfer_test\\",\\"tableList\\":[]}]
   */
  config?: string;
  /**
   * @remarks
   * The instance ID. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including instance IDs.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the target task. > You can call the [DescribeSlinkTasks](https://help.aliyun.com/document_detail/196830.html) operation to query the execution status of the target task, including the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

