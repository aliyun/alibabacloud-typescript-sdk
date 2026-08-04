// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdpDepartmentsResponseBodyDataDataList extends $dara.Model {
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 30520
   */
  id?: string;
  /**
   * @remarks
   * The ID of the custom IdP configuration.
   * 
   * @example
   * 1440
   */
  idpConfigId?: string;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * 示例部门
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idpConfigId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of department information.
   */
  dataList?: ListIdpDepartmentsResponseBodyDataDataList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpDepartmentsResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The department information.
   */
  data?: ListIdpDepartmentsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListIdpDepartmentsResponseBodyData,
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

