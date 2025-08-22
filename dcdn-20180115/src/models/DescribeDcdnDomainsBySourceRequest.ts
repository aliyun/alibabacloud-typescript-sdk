// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainsBySourceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of origin servers. Separate origin servers with commas (,). You can specify a maximum of 20 origin servers. Fuzzy match is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.org
   */
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sources: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

