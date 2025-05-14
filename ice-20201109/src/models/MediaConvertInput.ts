// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaObject } from "./MediaObject";


export class MediaConvertInput extends $dara.Model {
  inputFile?: MediaObject;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: MediaObject,
      name: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

