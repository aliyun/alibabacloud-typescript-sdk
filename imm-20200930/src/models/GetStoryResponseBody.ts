// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Story } from "./Story";


export class GetStoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B3D5E0A-D8B8-4DA0-8127-ED32C851****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the story.
   */
  story?: Story;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      story: 'Story',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      story: Story,
    };
  }

  validate() {
    if(this.story && typeof (this.story as any).validate === 'function') {
      (this.story as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

