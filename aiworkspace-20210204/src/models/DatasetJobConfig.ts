// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetJobConfig extends $dara.Model {
  config?: string;
  configType?: string;
  createTime?: string;
  datasetJobConfigId?: string;
  datasetVersion?: string;
  modifyTime?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      createTime: 'CreateTime',
      datasetJobConfigId: 'DatasetJobConfigId',
      datasetVersion: 'DatasetVersion',
      modifyTime: 'ModifyTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      createTime: 'string',
      datasetJobConfigId: 'string',
      datasetVersion: 'string',
      modifyTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

