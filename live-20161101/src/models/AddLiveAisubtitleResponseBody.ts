// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAISubtitleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0df228-4a64-af62-20e91b96****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the subtitle template.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  subtitleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subtitleId: 'SubtitleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subtitleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

