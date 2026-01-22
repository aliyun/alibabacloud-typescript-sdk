// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarAgentUserSessionsRequest extends $dara.Model {
  /**
   * @example
   * polardb-console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

