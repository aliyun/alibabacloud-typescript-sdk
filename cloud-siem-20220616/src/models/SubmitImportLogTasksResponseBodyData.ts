// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImportLogTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of log collection tasks that are submitted.
   * 
   * @example
   * 10
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

