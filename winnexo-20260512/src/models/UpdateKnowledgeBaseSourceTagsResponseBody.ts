// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseSourceTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The last modified time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The updated resource tags.
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      gmtModified: 'gmtModified',
      message: 'message',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceTags: 'sourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gmtModified: 'string',
      message: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceTags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

