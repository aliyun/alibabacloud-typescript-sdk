// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumeProcessorConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | project content
   */
  spl?: string;
  static names(): { [key: string]: string } {
    return {
      spl: 'spl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

