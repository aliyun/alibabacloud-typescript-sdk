// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadModelOutputData extends $dara.Model {
  modelPath?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'modelPath',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

