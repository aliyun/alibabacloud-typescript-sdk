// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RequestContents } from "./RequestContents";


export class UnifiedSearchInput extends $dara.Model {
  category?: string;
  contents?: RequestContents;
  engineType?: string;
  location?: string;
  query?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      contents: 'contents',
      engineType: 'engineType',
      location: 'location',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      contents: RequestContents,
      engineType: 'string',
      location: 'string',
      query: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    if(this.contents && typeof (this.contents as any).validate === 'function') {
      (this.contents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

