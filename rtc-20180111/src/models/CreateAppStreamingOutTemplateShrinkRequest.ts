// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppStreamingOutTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * The template.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
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

