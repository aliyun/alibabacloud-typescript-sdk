// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InteractTextResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  end?: boolean;
  /**
   * @example
   * 1
   */
  index?: number;
  message?: string;
  relatedImages?: string[];
  relatedVideos?: string[];
  /**
   * @example
   * 79e954faffe2415ebd18188ba787d78e
   */
  sessionId?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      index: 'index',
      message: 'message',
      relatedImages: 'relatedImages',
      relatedVideos: 'relatedVideos',
      sessionId: 'sessionId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      index: 'number',
      message: 'string',
      relatedImages: { 'type': 'array', 'itemType': 'string' },
      relatedVideos: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.relatedImages)) {
      $dara.Model.validateArray(this.relatedImages);
    }
    if(Array.isArray(this.relatedVideos)) {
      $dara.Model.validateArray(this.relatedVideos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

