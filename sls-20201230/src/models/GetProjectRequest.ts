// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRequest extends $dara.Model {
  crossRegion?: boolean;
  static names(): { [key: string]: string } {
    return {
      crossRegion: 'crossRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossRegion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

