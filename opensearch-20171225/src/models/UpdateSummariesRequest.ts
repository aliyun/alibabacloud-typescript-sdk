// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSummariesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The HTML tag that is used to highlight terms in red.
   * 
   * @example
   * "em"
   */
  element?: string;
  /**
   * @remarks
   * The connector that is used to connect segments.
   * 
   * @example
   * "..."
   */
  ellipsis?: string;
  /**
   * @remarks
   * The field.
   * 
   * @example
   * "title"
   */
  field?: string;
  /**
   * @remarks
   * The length of a segment.
   * 
   * @example
   * 50
   */
  len?: number;
  /**
   * @remarks
   * The number of segments.
   * 
   * @example
   * 1
   */
  snippet?: number;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      ellipsis: 'ellipsis',
      field: 'field',
      len: 'len',
      snippet: 'snippet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      ellipsis: 'string',
      field: 'string',
      len: 'number',
      snippet: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSummariesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateSummariesRequestBody[];
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateSummariesRequestBody },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

