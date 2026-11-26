// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobModelConfig extends $dara.Model {
  /**
   * @remarks
   * The model name, which must be unique within the Models list.
   * 
   * This parameter is required.
   * 
   * @example
   * actor
   */
  name?: string;
  /**
   * @remarks
   * The absolute path of the model in the working container. It can be located in a DataSources mount directory or preset in the image.
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/input/models/qwen
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

