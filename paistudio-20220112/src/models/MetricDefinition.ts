// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricDefinition extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * loss
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * .*train:loss=([-+]?[0-9]*\\\\.?[0-9]+(?:[eE][-+]?[0-9]+)?).*
   */
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

