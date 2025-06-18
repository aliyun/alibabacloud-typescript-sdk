// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupMachineGroupShrinkRequest extends $dara.Model {
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

