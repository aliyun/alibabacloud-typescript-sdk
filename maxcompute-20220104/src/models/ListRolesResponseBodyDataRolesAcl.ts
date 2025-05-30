// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRolesResponseBodyDataRolesAclFunction } from "./ListRolesResponseBodyDataRolesAclFunction";
import { ListRolesResponseBodyDataRolesAclInstance } from "./ListRolesResponseBodyDataRolesAclInstance";
import { ListRolesResponseBodyDataRolesAclPackage } from "./ListRolesResponseBodyDataRolesAclPackage";
import { ListRolesResponseBodyDataRolesAclProject } from "./ListRolesResponseBodyDataRolesAclProject";
import { ListRolesResponseBodyDataRolesAclResource } from "./ListRolesResponseBodyDataRolesAclResource";
import { ListRolesResponseBodyDataRolesAclTable } from "./ListRolesResponseBodyDataRolesAclTable";


export class ListRolesResponseBodyDataRolesAcl extends $dara.Model {
  /**
   * @remarks
   * The function.
   */
  function?: ListRolesResponseBodyDataRolesAclFunction[];
  /**
   * @remarks
   * The instance.
   */
  instance?: ListRolesResponseBodyDataRolesAclInstance[];
  /**
   * @remarks
   * The package.
   */
  package?: ListRolesResponseBodyDataRolesAclPackage[];
  /**
   * @remarks
   * The project.
   */
  project?: ListRolesResponseBodyDataRolesAclProject[];
  /**
   * @remarks
   * The resource.
   */
  resource?: ListRolesResponseBodyDataRolesAclResource[];
  /**
   * @remarks
   * The table.
   */
  table?: ListRolesResponseBodyDataRolesAclTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      instance: 'instance',
      package: 'package',
      project: 'project',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclFunction },
      instance: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclInstance },
      package: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclPackage },
      project: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclProject },
      resource: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclResource },
      table: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclTable },
    };
  }

  validate() {
    if(Array.isArray(this.function)) {
      $dara.Model.validateArray(this.function);
    }
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    if(Array.isArray(this.package)) {
      $dara.Model.validateArray(this.package);
    }
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
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

