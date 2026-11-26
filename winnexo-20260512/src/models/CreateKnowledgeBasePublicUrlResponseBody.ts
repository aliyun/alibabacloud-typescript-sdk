// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBasePublicUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the requested target directory in the enterprise knowledge base.
   * 
   * @example
   * dir_tenant_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-09-14T10:00:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The error message. This parameter is empty if the request is successful.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * Project plan
   */
  name?: string;
  /**
   * @remarks
   * The URL of the submitted public web page.
   * 
   * @example
   * https://example.com
   */
  originalUrl?: string;
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
   * The scope of the resource. The value is fixed to TENANT.
   * 
   * @example
   * TENANT
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the newly created source.
   * 
   * @example
   * src_public_url_1
   */
  sourceId?: string;
  /**
   * @remarks
   * The status of the resource. A value of RUNNING indicates that the request is accepted but the crawling and parsing are not completed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      message: 'message',
      name: 'name',
      originalUrl: 'originalUrl',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      message: 'string',
      name: 'string',
      originalUrl: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
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

