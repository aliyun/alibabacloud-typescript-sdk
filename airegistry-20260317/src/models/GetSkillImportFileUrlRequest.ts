// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillImportFileUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The Content-Type of the upload file. Default value: application/zip.
   * 
   * @example
   * application/zip
   */
  contentType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

