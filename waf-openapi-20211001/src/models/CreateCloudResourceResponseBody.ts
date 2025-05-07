// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource that is added to WAF. The ID is automatically generated.
   * 
   * @example
   * lb-***
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66A98669-ER12-WE34-23PO-301469*****E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
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

