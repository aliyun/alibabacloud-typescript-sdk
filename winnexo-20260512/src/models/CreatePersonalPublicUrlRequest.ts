// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalPublicUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The resource description.
   * 
   * @example
   * Project design document
   */
  description?: string;
  /**
   * @remarks
   * The ID of the target personal directory. If not specified, the current user\\"s default personal root directory is used.
   * 
   * @example
   * dir_personal_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The resource name. If omitted, the URL is used.
   * 
   * @example
   * Project Plan
   */
  name?: string;
  /**
   * @remarks
   * The analysis instruction.
   * 
   * @example
   * Extract decisions and to-do items
   */
  notes?: string;
  /**
   * @remarks
   * The name of the operating object.
   * 
   * @example
   * R&D Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The URL of the public HTTP/HTTPS web page.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com
   */
  originalUrl?: string;
  /**
   * @remarks
   * The list of resource tag JSON strings.
   * 
   * @example
   * ["R&D"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      name: 'name',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      originalUrl: 'originalUrl',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      name: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      originalUrl: 'string',
      sourceTags: 'string',
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

