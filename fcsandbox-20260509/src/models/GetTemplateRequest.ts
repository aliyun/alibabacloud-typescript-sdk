// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 88a4c762-b0ce-4661-9413-578b2309e60f
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

