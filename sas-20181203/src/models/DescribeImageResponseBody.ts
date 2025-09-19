// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * 0afb98d97f1a4030782fcf47e186909e5ad957bcc182d8be70334e0684b2****
   */
  digest?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the image digest.
   */
  data?: DescribeImageResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeImageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

