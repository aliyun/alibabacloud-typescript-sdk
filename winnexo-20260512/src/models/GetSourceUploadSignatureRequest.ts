// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceUploadSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The content type. Valid values:
   * 
   * - Text
   * - Markdown
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
   * The collaboration space ID passed from the frontend. This parameter is required when scope is set to group. The value must be a space accessible to the current user and is used in the OSS path for locating. The value must be 1 to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-). This parameter is not used for other scope values.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
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
      groupId: 'groupId',
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
      groupId: 'string',
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

