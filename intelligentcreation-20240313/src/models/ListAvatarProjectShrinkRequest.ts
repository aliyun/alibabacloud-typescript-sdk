// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarProjectShrinkRequest extends $dara.Model {
  projectIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectIdListShrink: 'projectIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

