// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvancedSearchFileResponseBodyResourceSearch extends $dara.Model {
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedSearchFileResponseBody extends $dara.Model {
  requestId?: string;
  resourceSearch?: GetAdvancedSearchFileResponseBodyResourceSearch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSearch: 'ResourceSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSearch: GetAdvancedSearchFileResponseBodyResourceSearch,
    };
  }

  validate() {
    if(this.resourceSearch && typeof (this.resourceSearch as any).validate === 'function') {
      (this.resourceSearch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

