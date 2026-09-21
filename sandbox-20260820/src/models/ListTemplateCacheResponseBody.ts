// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateCache } from "./PublicTemplateCache";


export class ListTemplateCacheResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * cae5f900-8b1d-4c0e-9c2a-1a2b3c4d5e6f
   */
  nextToken?: string;
  /**
   * @example
   * B5AD8B54-4358-5F5B-ACAA-52F2016459C6
   */
  requestId?: string;
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

