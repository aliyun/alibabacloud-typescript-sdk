// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeCorpSubmissionRequest extends $dara.Model {
  appTypes?: string;
  corpId?: string;
  createFromTimeGMT?: number;
  createToTimeGMT?: number;
  keyword?: string;
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  processCodes?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appTypes: 'AppTypes',
      corpId: 'CorpId',
      createFromTimeGMT: 'CreateFromTimeGMT',
      createToTimeGMT: 'CreateToTimeGMT',
      keyword: 'Keyword',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processCodes: 'ProcessCodes',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTypes: 'string',
      corpId: 'string',
      createFromTimeGMT: 'number',
      createToTimeGMT: 'number',
      keyword: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processCodes: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

