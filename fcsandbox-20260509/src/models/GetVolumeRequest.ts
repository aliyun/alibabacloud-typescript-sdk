// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

