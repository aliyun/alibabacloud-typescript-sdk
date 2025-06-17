// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnTypesResponseBodyCdnTypesCdnType extends $dara.Model {
  /**
   * @remarks
   * The description of the domain name type.
   * 
   * @example
   * Download Acceleration
   */
  desc?: string;
  /**
   * @remarks
   * The type of the domain name.
   * 
   * @example
   * download
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

