// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaObject } from "./MediaObject";


export class MediaConvertOutputGroupConfig extends $dara.Model {
  manifestName?: string;
  outputFileBase?: MediaObject;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      manifestName: 'ManifestName',
      outputFileBase: 'OutputFileBase',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestName: 'string',
      outputFileBase: MediaObject,
      type: 'string',
    };
  }

  validate() {
    if(this.outputFileBase && typeof (this.outputFileBase as any).validate === 'function') {
      (this.outputFileBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

