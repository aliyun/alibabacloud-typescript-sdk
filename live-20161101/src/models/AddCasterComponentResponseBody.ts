// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterComponentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The component ID. The value can be used as the value of a request parameter to query, modify, or delete a production studio.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
   */
  componentId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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

