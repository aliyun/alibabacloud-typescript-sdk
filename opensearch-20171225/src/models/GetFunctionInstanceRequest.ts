// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the richness of returned information. Valid values:
   * 
   * *   simple: displays only the basic information.
   * *   normal: displays information such as createParameters and cron. This is the default value.
   * *   detail: returns the details of the training task.
   * 
   * @example
   * detail
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

