// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Template extends $dara.Model {
  templateID?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      templateID: 'templateID',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateID: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

