// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEaiEciResponseBody extends $dara.Model {
  /**
   * @example
   * eci-2zeh03ygxlrzmfi6****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
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

