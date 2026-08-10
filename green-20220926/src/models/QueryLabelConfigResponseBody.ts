// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLabelConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content moderation configuration.
   */
  contentModeration?: any[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contentModeration: 'ContentModeration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentModeration: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentModeration)) {
      $dara.Model.validateArray(this.contentModeration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

