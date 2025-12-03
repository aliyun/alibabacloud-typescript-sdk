// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEaiResponseBody extends $dara.Model {
  /**
   * @example
   * i-wz93g6pyat2g7t7o****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC84474
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

