// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypesCodeMapping extends $dara.Model {
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * cs.cluster
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * cs.cluster
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

