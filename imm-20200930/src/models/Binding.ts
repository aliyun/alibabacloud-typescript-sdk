// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Binding extends $dara.Model {
  createTime?: string;
  datasetName?: string;
  phase?: string;
  projectName?: string;
  reason?: string;
  state?: string;
  URI?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetName: 'DatasetName',
      phase: 'Phase',
      projectName: 'ProjectName',
      reason: 'Reason',
      state: 'State',
      URI: 'URI',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetName: 'string',
      phase: 'string',
      projectName: 'string',
      reason: 'string',
      state: 'string',
      URI: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

