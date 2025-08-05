// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageResponseBodyDataAllowedProjectList extends $dara.Model {
  /**
   * @remarks
   * The security level for sensitive data.
   * 
   * @example
   * 2
   */
  label?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * proejctB
   */
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
   * function_1
   */
  name?: string;
  /**
   * @remarks
   * The name of schema.
   * 
   * @example
   * default
   */
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
   * res_1
   */
  name?: string;
  /**
   * @remarks
   * The name of schema.
   * 
   * @example
   * default
   */
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
   * dim_odps
   */
  name?: string;
  /**
   * @remarks
   * The name of schema.
   * 
   * @example
   * default
   */
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

export class GetPackageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The projects in which the package is installed.
   */
  allowedProjectList?: GetPackageResponseBodyDataAllowedProjectList[];
  /**
   * @remarks
   * The details of the resources that are included in the package.
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPackageResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message.
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0b57ff8316614119858417939e3e54
   */
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

