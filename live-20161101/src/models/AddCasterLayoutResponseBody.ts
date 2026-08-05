// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterLayoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the layout. You can use this ID as a request parameter when you call operations to manage layouts, such as deleting, modifying, or querying layouts for a production studio or a virtual studio.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
   */
  layoutId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
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

