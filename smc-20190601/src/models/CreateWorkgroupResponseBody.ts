// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkgroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F59623A9
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the workgroup.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workgroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

