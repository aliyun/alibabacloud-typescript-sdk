// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserClusterTypesResponseBodyClusterTypes extends $dara.Model {
  /**
   * @example
   * Public
   */
  accessType?: string;
  /**
   * @example
   * AckEdgePro
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

