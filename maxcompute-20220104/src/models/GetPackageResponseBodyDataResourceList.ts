// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPackageResponseBodyDataResourceListFunction } from "./GetPackageResponseBodyDataResourceListFunction";
import { GetPackageResponseBodyDataResourceListResource } from "./GetPackageResponseBodyDataResourceListResource";
import { GetPackageResponseBodyDataResourceListTable } from "./GetPackageResponseBodyDataResourceListTable";


export class GetPackageResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The functions.
   */
  function?: GetPackageResponseBodyDataResourceListFunction[];
  /**
   * @remarks
   * The resources.
   */
  resource?: GetPackageResponseBodyDataResourceListResource[];
  /**
   * @remarks
   * The tables.
   */
  table?: GetPackageResponseBodyDataResourceListTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListFunction },
      resource: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListResource },
      table: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListTable },
    };
  }

  validate() {
    if(Array.isArray(this.function)) {
      $dara.Model.validateArray(this.function);
    }
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

