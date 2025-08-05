// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyDataRolesAclFunction extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the function.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * functionA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclInstance extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the instance.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instanceA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclPackage extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the package.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclProject extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the project.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * projectA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclResource extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the resource.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * resourceA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclTable extends $dara.Model {
  /**
   * @remarks
   * The operations that were performed on the table.
   */
  actions?: string[];
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tableA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListRolesResponseBodyDataRoles extends $dara.Model {
  /**
   * @remarks
   * The ACL-based permissions that are granted to the role.
   */
  acl?: ListRolesResponseBodyDataRolesAcl;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * roleA
   */
  name?: string;
  /**
   * @remarks
   * The policy that is attached to the role.
   * 
   * @example
   * {
   *       "Statement": [
   *             {
   *                   "Action": [
   *                         "odps:*"
   *                   ],
   *                   "Effect": "Allow",
   *                   "Resource": [
   *                         "acs:odps:*:projects/{projectname}/authorization/packages"
   *                   ]
   *             }
   *       ],
   *       "Version": "1"
   * }
   */
  policy?: string;
  /**
   * @remarks
   * The type of the role.
   * 
   * @example
   * admin
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      name: 'name',
      policy: 'policy',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: ListRolesResponseBodyDataRolesAcl,
      name: 'string',
      policy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.acl && typeof (this.acl as any).validate === 'function') {
      (this.acl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The MaxCompute project-level roles.
   */
  roles?: ListRolesResponseBodyDataRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRolesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dfe716686526652451361e80ae
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRolesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

