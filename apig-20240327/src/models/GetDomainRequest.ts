// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return online resource information.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  static names(): { [key: string]: string } {
    return {
      withStatistics: 'withStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withStatistics: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

