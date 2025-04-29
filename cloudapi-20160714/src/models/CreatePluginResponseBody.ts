// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the plug-in.
   * 
   * @example
   * 1f3bde29b43d4d53989248327ff737f2
   */
  pluginId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the plug-in is successfully marked.
   * 
   * @example
   * true
   */
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      pluginId: 'PluginId',
      requestId: 'RequestId',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginId: 'string',
      requestId: 'string',
      tagStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

