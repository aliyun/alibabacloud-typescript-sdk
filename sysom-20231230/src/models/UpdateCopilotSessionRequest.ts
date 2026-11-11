// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCopilotSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The session title. The length is 1 to 255 characters.
   * 
   * @example
   * CPU load analysis record
   */
  name?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * archived
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

