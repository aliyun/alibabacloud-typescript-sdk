// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterMiguDownloadSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the source file. This is the sourceId returned by the upload operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3f2a1b9c8d7e4f60a1b2c3d4e5f6a7b8
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

