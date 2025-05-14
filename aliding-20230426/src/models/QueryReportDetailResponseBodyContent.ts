// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReportDetailResponseBodyContent extends $dara.Model {
  images?: string[];
  key?: string;
  /**
   * @example
   * 0
   */
  sort?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      key: 'Key',
      sort: 'Sort',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      sort: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

