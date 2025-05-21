// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOverviewResponseBodyDataApi extends $dara.Model {
  /**
   * @remarks
   * Number of published APIs.
   * 
   * @example
   * 1
   */
  publishedCount?: number;
  /**
   * @remarks
   * Number of APIs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publishedCount: 'publishedCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

