// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRoleAclResponseBodyDataFunction } from "./GetRoleAclResponseBodyDataFunction";
import { GetRoleAclResponseBodyDataInstance } from "./GetRoleAclResponseBodyDataInstance";
import { GetRoleAclResponseBodyDataPackage } from "./GetRoleAclResponseBodyDataPackage";
import { GetRoleAclResponseBodyDataProject } from "./GetRoleAclResponseBodyDataProject";
import { GetRoleAclResponseBodyDataResource } from "./GetRoleAclResponseBodyDataResource";
import { GetRoleAclResponseBodyDataTable } from "./GetRoleAclResponseBodyDataTable";


export class GetRoleAclResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The function.
   */
  function?: GetRoleAclResponseBodyDataFunction[];
  /**
   * @remarks
   * The instance.
   */
  instance?: GetRoleAclResponseBodyDataInstance[];
  /**
   * @remarks
   * The package.
   */
  package?: GetRoleAclResponseBodyDataPackage[];
  /**
   * @remarks
   * The project.
   */
  project?: GetRoleAclResponseBodyDataProject[];
  /**
   * @remarks
   * The resource.
   */
  resource?: GetRoleAclResponseBodyDataResource[];
  /**
   * @remarks
   * The table.
   */
  table?: GetRoleAclResponseBodyDataTable[];
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
      function: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataFunction },
      instance: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataInstance },
      package: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataPackage },
      project: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataProject },
      resource: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataResource },
      table: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataTable },
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

