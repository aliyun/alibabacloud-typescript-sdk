// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageResponseBodyDataAllowedProjectList extends $dara.Model {
  label?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListFunction extends $dara.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
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

export class GetPackageResponseBodyDataResourceListResource extends $dara.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
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

export class GetPackageResponseBodyDataResourceListTable extends $dara.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
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

export class GetPackageResponseBodyDataResourceList extends $dara.Model {
  function?: GetPackageResponseBodyDataResourceListFunction[];
  resource?: GetPackageResponseBodyDataResourceListResource[];
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

export class GetPackageResponseBodyData extends $dara.Model {
  allowedProjectList?: GetPackageResponseBodyDataAllowedProjectList[];
  resourceList?: GetPackageResponseBodyDataResourceList;
  static names(): { [key: string]: string } {
    return {
      allowedProjectList: 'allowedProjectList',
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedProjectList: { 'type': 'array', 'itemType': GetPackageResponseBodyDataAllowedProjectList },
      resourceList: GetPackageResponseBodyDataResourceList,
    };
  }

  validate() {
    if(Array.isArray(this.allowedProjectList)) {
      $dara.Model.validateArray(this.allowedProjectList);
    }
    if(this.resourceList && typeof (this.resourceList as any).validate === 'function') {
      (this.resourceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBody extends $dara.Model {
  data?: GetPackageResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPackageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

