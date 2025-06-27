// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionResourceTypeResponseBodyResourceTypeList extends $dara.Model {
  /**
   * @example
   * EIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

