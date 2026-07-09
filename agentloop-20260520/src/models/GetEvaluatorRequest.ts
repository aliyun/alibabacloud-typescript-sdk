// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluatorRequest extends $dara.Model {
  /**
   * @remarks
   * The target version number. If not specified, the latest version is used.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

