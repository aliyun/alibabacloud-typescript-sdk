// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventVariableTemplateBindResponseBodyResultObjectChargeVariables extends $dara.Model {
  /**
   * @remarks
   * Variable code
   * 
   * @example
   * ip
   */
  code?: string;
  /**
   * @remarks
   * Description of the variable.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Field type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 456
   */
  id?: number;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * ip
   */
  name?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * ip
   */
  title?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      fieldType: 'fieldType',
      id: 'id',
      name: 'name',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      fieldType: 'string',
      id: 'number',
      name: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableTemplateBindResponseBodyResultObjectFreeVariables extends $dara.Model {
  /**
   * @remarks
   * Variable code
   * 
   * @example
   * age
   */
  code?: string;
  /**
   * @remarks
   * Variable description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Field type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 234
   */
  id?: number;
  /**
   * @remarks
   * Variable name
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 年龄
   */
  title?: string;
  /**
   * @remarks
   * Variable type.
   * 
   * @example
   * NATIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      fieldType: 'fieldType',
      id: 'id',
      name: 'name',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      fieldType: 'string',
      id: 'number',
      name: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableTemplateBindResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * List of chargeable variables
   */
  chargeVariables?: DescribeEventVariableTemplateBindResponseBodyResultObjectChargeVariables[];
  /**
   * @remarks
   * List of free variables
   */
  freeVariables?: DescribeEventVariableTemplateBindResponseBodyResultObjectFreeVariables[];
  /**
   * @remarks
   * Template code
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 38
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      chargeVariables: 'chargeVariables',
      freeVariables: 'freeVariables',
      templateCode: 'templateCode',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeVariables: { 'type': 'array', 'itemType': DescribeEventVariableTemplateBindResponseBodyResultObjectChargeVariables },
      freeVariables: { 'type': 'array', 'itemType': DescribeEventVariableTemplateBindResponseBodyResultObjectFreeVariables },
      templateCode: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chargeVariables)) {
      $dara.Model.validateArray(this.chargeVariables);
    }
    if(Array.isArray(this.freeVariables)) {
      $dara.Model.validateArray(this.freeVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventVariableTemplateBindResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeEventVariableTemplateBindResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeEventVariableTemplateBindResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

