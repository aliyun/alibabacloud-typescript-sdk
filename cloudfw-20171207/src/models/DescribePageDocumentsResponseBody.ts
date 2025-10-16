// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageDocumentsResponseBodyDocs extends $dara.Model {
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * https://notify-center-test.ybaobx.com/webhook/arms
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
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

export class DescribePageDocumentsResponseBodyMore extends $dara.Model {
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * https://zjysfy.womanhospital.cn/pub/hos/0/noneBackGround.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
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

export class DescribePageDocumentsResponseBody extends $dara.Model {
  docs?: DescribePageDocumentsResponseBodyDocs[];
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1E4FCAuT2gK0jSZFvXXXnFXXa-3399-662.png
   */
  imageUrl?: string;
  /**
   * @example
   * sg_server
   */
  module?: string;
  more?: DescribePageDocumentsResponseBodyMore;
  /**
   * @example
   * 7C81E1AD-08C0-5E09-853B-FDC77B90****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docs: 'Docs',
      imageUrl: 'ImageUrl',
      module: 'Module',
      more: 'More',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docs: { 'type': 'array', 'itemType': DescribePageDocumentsResponseBodyDocs },
      imageUrl: 'string',
      module: 'string',
      more: DescribePageDocumentsResponseBodyMore,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docs)) {
      $dara.Model.validateArray(this.docs);
    }
    if(this.more && typeof (this.more as any).validate === 'function') {
      (this.more as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

