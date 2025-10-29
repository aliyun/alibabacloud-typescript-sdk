// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComponentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset acceleration component. To obtain the component ID, see [ListComponents](https://help.aliyun.com/document_detail/2979566.html).
   * 
   * @example
   * 123123123123123
   */
  componentId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * adssd****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

