// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceRequestOption extends $dara.Model {
  description?: string;
  /**
   * @example
   * lHiicjNFM2iSFYSdz2iPuI8ZwiEiE
   */
  teamId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      teamId: 'TeamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      teamId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

