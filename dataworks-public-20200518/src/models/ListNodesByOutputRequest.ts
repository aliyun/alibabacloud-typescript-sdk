// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesByOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The output name of the node. You can specify multiple output names. Separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * aaaaa.1231412_out,bbbb.12313123_out
   */
  outputs?: string;
  /**
   * @remarks
   * The environment of Operation Center. Valid values: PROD and DEV. The value PROD indicates the production environment, and the value DEV indicates the development environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

