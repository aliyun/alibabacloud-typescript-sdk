// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvancedSearchFileResponseBodyResourceSearch extends $dara.Model {
  /**
   * @remarks
   * The download URL of the resource file.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the resource file was generated. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1688281755480
   */
  resourceInventoryGenerateTime?: number;
  /**
   * @remarks
   * The generation status of the resource file. Valid values:
   * 
   * *   CREATING: The resource file is being generated.
   * *   COMPLETE: The resource file is generated.
   * 
   * @example
   * COMPLETE
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9366FE45-3C83-54FB-8BB1-44176B200706
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource file.
   */
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

