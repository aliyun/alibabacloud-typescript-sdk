// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBasePreSignedUrlRequestDocuments extends $dara.Model {
  /**
   * @remarks
   * The display name of the file. If not specified, the file name from Path is used by default.
   * 
   * @example
   * CHANGELOG.md
   */
  name?: string;
  /**
   * @remarks
   * The **file name or relative path** for local upload scenarios. The path cannot start with `direct_upload/` or `uploaded/`, cannot contain empty segments, `.`, or `..`, and must be less than or equal to 1,024 bytes in length.
   * 
   * @example
   * contract-2026.md
   */
  path?: string;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 1024
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBasePreSignedUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The list of files to be uploaded. You can specify 1 to 100 files.
   */
  documents?: GetKnowledgeBasePreSignedUrlRequestDocuments[];
  /**
   * @remarks
   * The validity period of the pre-signed URL in seconds. Default value: `3600`.
   * 
   * @example
   * 3600
   */
  expiresIn?: number;
  /**
   * @remarks
   * The ID of the knowledge base. This parameter and datasetId are mutually exclusive. If both are specified, this parameter takes precedence.
   * 
   * @example
   * kb-3bd02617e9be335f
   */
  knowledgeBaseId?: string;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      expiresIn: 'ExpiresIn',
      knowledgeBaseId: 'KnowledgeBaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': GetKnowledgeBasePreSignedUrlRequestDocuments },
      expiresIn: 'number',
      knowledgeBaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

