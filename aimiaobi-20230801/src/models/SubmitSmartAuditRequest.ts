// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartAuditRequestImageUrlList extends $dara.Model {
  /**
   * @remarks
   * Unique image identifier
   * 
   * @example
   * xxxx
   */
  id?: string;
  /**
   * @remarks
   * The URL can be a web link or a base64-encoded string.
   * 
   * @example
   * http://www.example.com/xxx.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartAuditRequestImageUrls extends $dara.Model {
  /**
   * @remarks
   * Unique image identifier
   * 
   * @example
   * 3HAZTv62M0vkyz5B
   */
  id?: string;
  /**
   * @remarks
   * The URL can be a web link or a base64-encoded string.
   * 
   * @example
   * https://www.example.com/xxx.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartAuditRequest extends $dara.Model {
  /**
   * @remarks
   * Parameters for image audit
   */
  imageUrlList?: SubmitSmartAuditRequestImageUrlList[];
  /**
   * @remarks
   * Rule library ID for rule-based auditing (default: Default)
   * 
   * @example
   * note_1_486
   */
  noteId?: string;
  /**
   * @remarks
   * List of sub-audit codes
   */
  subCodes?: string[];
  /**
   * @remarks
   * Word library name for dictionary-based auditing (default: Default)
   * 
   * @example
   * Default
   */
  termsName?: string;
  /**
   * @remarks
   * Content to be audited
   * 
   * @example
   * “你好呀”
   */
  text?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * Parameters for image audit (deprecated; use ImageUrlList instead)
   */
  imageUrls?: SubmitSmartAuditRequestImageUrls[];
  static names(): { [key: string]: string } {
    return {
      imageUrlList: 'ImageUrlList',
      noteId: 'NoteId',
      subCodes: 'SubCodes',
      termsName: 'TermsName',
      text: 'Text',
      workspaceId: 'WorkspaceId',
      imageUrls: 'imageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlList: { 'type': 'array', 'itemType': SubmitSmartAuditRequestImageUrlList },
      noteId: 'string',
      subCodes: { 'type': 'array', 'itemType': 'string' },
      termsName: 'string',
      text: 'string',
      workspaceId: 'string',
      imageUrls: { 'type': 'array', 'itemType': SubmitSmartAuditRequestImageUrls },
    };
  }

  validate() {
    if(Array.isArray(this.imageUrlList)) {
      $dara.Model.validateArray(this.imageUrlList);
    }
    if(Array.isArray(this.subCodes)) {
      $dara.Model.validateArray(this.subCodes);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

