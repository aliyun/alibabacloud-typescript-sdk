// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks extends $dara.Model {
  model?: string;
  operationStatus?: number;
  publishTime?: string;
  status?: number;
  taskId?: number;
  upgradeCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      operationStatus: 'OperationStatus',
      publishTime: 'PublishTime',
      status: 'Status',
      taskId: 'TaskId',
      upgradeCount: 'UpgradeCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      operationStatus: 'number',
      publishTime: 'string',
      status: 'number',
      taskId: 'number',
      upgradeCount: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

