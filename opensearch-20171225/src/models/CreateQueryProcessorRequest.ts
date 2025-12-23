// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueryProcessorRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: any;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

