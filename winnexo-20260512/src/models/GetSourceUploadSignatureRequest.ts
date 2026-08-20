// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceUploadSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The content type. Valid values: Text and Markdown.
   * 
   * @example
   * string_value
   */
  contentType?: string;
  /**
   * @remarks
   * The expiration time of the signed URL, in seconds. Default value: 3600.
   * 
   * @example
   * 3600
   */
  expires?: number;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.pdf
   */
  filename?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name). This parameter is optional.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * source
   */
  scope?: string;
  /**
   * @remarks
   * The tenant ID to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      expires: 'expires',
      filename: 'filename',
      operatingObjectName: 'operatingObjectName',
      scope: 'scope',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      expires: 'number',
      filename: 'string',
      operatingObjectName: 'string',
      scope: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

