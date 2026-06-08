// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentShrinkRequest extends $dara.Model {
  /**
   * @example
   * TF-CreateRule-1652253755-aa33f762-7e99-4aee-bd27-d3370afa5625
   */
  clientToken?: string;
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
      clientToken: 'ClientToken',
      description: 'Description',
      metadataShrink: 'Metadata',
      name: 'Name',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

