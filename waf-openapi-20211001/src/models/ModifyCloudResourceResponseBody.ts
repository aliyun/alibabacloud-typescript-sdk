// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource that is added to WAF.
   * 
   * @example
   * lb-xxx-80-clb7
   */
  cloudResource?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResource: 'CloudResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResource: 'string',
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

