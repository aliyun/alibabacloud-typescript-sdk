// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterLayoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can use the ID as a request parameter in the API operation that is used to modify a layout in the production studio, query layouts in the production studio, add a component in the production studio, or query components in the production studio.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the layout. You can use the ID as a request parameter in the API operation that is used to query layouts in the production studio.
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
      casterId: 'CasterId',
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
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

