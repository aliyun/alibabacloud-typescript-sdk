// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCmsExporterResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  data?: string;
  /**
   * @example
   * 27E653FA-5958-45BE-8AA9-14D884DC****
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
      data: 'string',
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

