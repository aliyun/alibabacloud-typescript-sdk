// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCenterServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

