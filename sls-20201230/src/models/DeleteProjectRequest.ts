// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectRequest extends $dara.Model {
  forceDelete?: boolean;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'forceDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

