// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentInstanceConfigShrinkRequest extends $dara.Model {
  attributesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      attributesShrink: 'attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

