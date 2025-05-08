// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserProjectNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the real-time log delivery task.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-dcdn-log-56
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

