// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupSourceContentResponseBody extends $dara.Model {
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
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Project resource
   */
  name?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * C474BFC7-7B11-5D92-971E-74AA82EC495B
   */
  requestId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * source_example
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * example
   */
  sourceType?: string;
  /**
   * @remarks
   * The task running status.
   * 
   * @example
   * example
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

