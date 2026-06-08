// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentShrinkRequest extends $dara.Model {
  description?: string;
  metadataShrink?: string;
  /**
   * @example
   * my-agent
   */
  name?: string;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadataShrink: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadataShrink: 'string',
      name: 'string',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

