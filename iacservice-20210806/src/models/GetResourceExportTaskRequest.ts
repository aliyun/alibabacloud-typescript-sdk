// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceExportTaskRequest extends $dara.Model {
  /**
   * @example
   * v3
   */
  exportVersion?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

