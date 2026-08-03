// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextsRequest extends $dara.Model {
  generationSource?: string;
  industry?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  publishStatus?: string;
  textStyleType?: string;
  textTheme?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      publishStatus: 'publishStatus',
      textStyleType: 'textStyleType',
      textTheme: 'textTheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationSource: 'string',
      industry: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publishStatus: 'string',
      textStyleType: 'string',
      textTheme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

