// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateCacheInput extends $dara.Model {
  teamID?: string;
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

