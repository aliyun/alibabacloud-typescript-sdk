// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputGroupConfig } from "./MediaConvertOutputGroupConfig";
import { MediaConvertOutputGroupOutput } from "./MediaConvertOutputGroupOutput";


export class MediaConvertOutputGroup extends $dara.Model {
  groupConfig?: MediaConvertOutputGroupConfig;
  name?: string;
  outputs?: MediaConvertOutputGroupOutput[];
  static names(): { [key: string]: string } {
    return {
      groupConfig: 'GroupConfig',
      name: 'Name',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupConfig: MediaConvertOutputGroupConfig,
      name: 'string',
      outputs: { 'type': 'array', 'itemType': MediaConvertOutputGroupOutput },
    };
  }

  validate() {
    if(this.groupConfig && typeof (this.groupConfig as any).validate === 'function') {
      (this.groupConfig as any).validate();
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

