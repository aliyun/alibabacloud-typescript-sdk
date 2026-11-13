// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateCache } from "./PublicTemplateCache";


export class ListTemplateCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page. The value is empty if no more results are available.
   * 
   * @example
   * cae5f900-8b1d-4c0e-9c2a-1a2b3c4d5e6f
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B5AD8B54-4358-5F5B-ACAA-52F2016459C6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of template cache objects.
   */
  templateCaches?: PublicTemplateCache[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      templateCaches: 'templateCaches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      templateCaches: { 'type': 'array', 'itemType': PublicTemplateCache },
    };
  }

  validate() {
    if(Array.isArray(this.templateCaches)) {
      $dara.Model.validateArray(this.templateCaches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

