// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchExportWordTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  taskStats?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      taskStats: 'TaskStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      taskStats: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

