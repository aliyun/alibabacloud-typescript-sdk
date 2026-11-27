// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppStreamingOutTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. You can create and query it in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * Template.
   * 
   * This parameter is required.
   */
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

