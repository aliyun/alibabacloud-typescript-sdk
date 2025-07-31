// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceDependenciesResponseBodyDependencyList extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * jytest
   */
  name?: string;
  /**
   * @example
   * pipeline
   */
  type?: string;
  /**
   * @example
   * pipeline
   */
  typeCode?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
      typeCode: 'TypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
      typeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDependenciesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  dependencyList?: GetDataSourceDependenciesResponseBodyDependencyList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dependencyList: 'DependencyList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dependencyList: { 'type': 'array', 'itemType': GetDataSourceDependenciesResponseBodyDependencyList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dependencyList)) {
      $dara.Model.validateArray(this.dependencyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

