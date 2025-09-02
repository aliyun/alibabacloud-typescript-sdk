// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchNodesByOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The output names of the node. If you specify multiple output names, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * aaaaa.1231412_out,bbbb.12313123_out
   */
  outputs?: string;
  /**
   * @remarks
   * The environment of Operation Center. Valid values: PROD and DEV.
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

