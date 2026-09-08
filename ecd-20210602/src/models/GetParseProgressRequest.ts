// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The task key for parsing the skill package.
   * 
   * This parameter is required.
   * 
   * @example
   * 2E7D8B71-2677-1B4C-9E25-A88B9C5******
   */
  taskKey?: string;
  static names(): { [key: string]: string } {
    return {
      taskKey: 'TaskKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

