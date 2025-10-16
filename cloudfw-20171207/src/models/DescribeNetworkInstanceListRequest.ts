// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInstanceListRequest extends $dara.Model {
  /**
   * @example
   * cen-x5jayxou71ad73****
   */
  cenId?: string;
  /**
   * @example
   * expressconnect
   */
  connectType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      connectType: 'ConnectType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      connectType: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

