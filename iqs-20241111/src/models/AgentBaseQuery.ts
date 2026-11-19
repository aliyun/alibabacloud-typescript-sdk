// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentBaseQuery extends $dara.Model {
  /**
   * @remarks
   * The natural language question used to retrieve nearby locations.
   * 
   * @example
   * Luxury hotels within 5 km of Lingyin Temple in Hangzhou
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

