// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PullServicesResponseBodyDataServices } from "./PullServicesResponseBodyDataServices";


export class PullServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The alias of the namespace.
   * 
   * @example
   * public
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The information about services.
   */
  services?: PullServicesResponseBodyDataServices[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      namespace: 'Namespace',
      namespaceShowName: 'NamespaceShowName',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      namespace: 'string',
      namespaceShowName: 'string',
      services: { 'type': 'array', 'itemType': PullServicesResponseBodyDataServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

