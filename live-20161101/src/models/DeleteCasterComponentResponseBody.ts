// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterComponentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can use the ID as a request parameter in the API operation that is called to query the components in the production studio, add an episode list to the production studio, or modify a component in the production studio.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880****
   */
  casterId?: string;
  /**
   * @remarks
   * The component ID. You can use the ID as a request parameter in the API operation that is called to query the component in the production studio or modify the component in the production studio.
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
      casterId: 'CasterId',
      componentId: 'ComponentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
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

