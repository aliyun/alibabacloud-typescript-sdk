// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexAddDocumentsJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the task, `JobId`.
   * 
   * @example
   * 42687eb254a34802bed398357f5498ae
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

