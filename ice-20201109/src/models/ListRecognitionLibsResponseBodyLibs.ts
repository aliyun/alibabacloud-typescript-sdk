// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecognitionLibsResponseBodyLibsLib } from "./ListRecognitionLibsResponseBodyLibsLib";


export class ListRecognitionLibsResponseBodyLibs extends $dara.Model {
  lib?: ListRecognitionLibsResponseBodyLibsLib[];
  static names(): { [key: string]: string } {
    return {
      lib: 'Lib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lib: { 'type': 'array', 'itemType': ListRecognitionLibsResponseBodyLibsLib },
    };
  }

  validate() {
    if(Array.isArray(this.lib)) {
      $dara.Model.validateArray(this.lib);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

