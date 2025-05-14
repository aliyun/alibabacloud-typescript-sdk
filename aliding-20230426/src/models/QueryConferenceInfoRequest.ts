// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

