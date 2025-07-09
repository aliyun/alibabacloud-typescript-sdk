// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructRefreshJobModel extends $dara.Model {
  endTime?: string;
  name?: string;
  processid?: string;
  refreshInterval?: string;
  refreshModel?: string;
  resourceGroup?: string;
  scheduledStartTime?: string;
  schemaName?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      processid: 'Processid',
      refreshInterval: 'RefreshInterval',
      refreshModel: 'RefreshModel',
      resourceGroup: 'ResourceGroup',
      scheduledStartTime: 'ScheduledStartTime',
      schemaName: 'SchemaName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      processid: 'string',
      refreshInterval: 'string',
      refreshModel: 'string',
      resourceGroup: 'string',
      scheduledStartTime: 'string',
      schemaName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

