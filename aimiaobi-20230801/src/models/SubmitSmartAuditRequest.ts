// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartAuditRequestImageUrlList extends $dara.Model {
  id?: string;
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
  id?: string;
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
  imageUrlList?: SubmitSmartAuditRequestImageUrlList[];
  noteId?: string;
  subCodes?: string[];
  termsName?: string;
  text?: string;
  /**
   * @example
   * xxxx
   */
  workspaceId?: string;
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

