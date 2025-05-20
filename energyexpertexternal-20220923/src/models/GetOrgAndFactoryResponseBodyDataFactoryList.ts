// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgAndFactoryResponseBodyDataFactoryList extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * Ledi Industrial Park 1
   */
  factoryName?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      factoryName: 'factoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      factoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

