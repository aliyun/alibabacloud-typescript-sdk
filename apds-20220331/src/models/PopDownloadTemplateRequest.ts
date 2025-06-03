// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PopDownloadTemplateRequest extends $dara.Model {
  targetDialect?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      targetDialect: 'targetDialect',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetDialect: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

