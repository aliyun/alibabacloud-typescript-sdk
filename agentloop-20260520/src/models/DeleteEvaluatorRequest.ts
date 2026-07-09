// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEvaluatorRequest extends $dara.Model {
  /**
   * @remarks
   * The version to delete. If this parameter is not specified, the entire evaluator is deleted.
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

