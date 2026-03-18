// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyDataRolesAclFunction extends $dara.Model {
  actions?: string[];
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
  actions?: string[];
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
  actions?: string[];
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
  actions?: string[];
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
  actions?: string[];
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
  actions?: string[];
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
  function?: ListRolesResponseBodyDataRolesAclFunction[];
  instance?: ListRolesResponseBodyDataRolesAclInstance[];
  package?: ListRolesResponseBodyDataRolesAclPackage[];
  project?: ListRolesResponseBodyDataRolesAclProject[];
  resource?: ListRolesResponseBodyDataRolesAclResource[];
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
  acl?: ListRolesResponseBodyDataRolesAcl;
  name?: string;
  policy?: string;
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
  data?: ListRolesResponseBodyData;
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

