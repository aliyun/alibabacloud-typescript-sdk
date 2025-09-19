// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTraceInfoNodeResponseBodyNodePropertyList extends $dara.Model {
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * Incident
   */
  name?: string;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * Alert
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceInfoNodeResponseBodyNode extends $dara.Model {
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * login
   */
  name?: string;
  /**
   * @remarks
   * An array that consists of the properties of the node.
   */
  propertyList?: DescribeTraceInfoNodeResponseBodyNodePropertyList[];
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * Alert
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      propertyList: 'PropertyList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      propertyList: { 'type': 'array', 'itemType': DescribeTraceInfoNodeResponseBodyNodePropertyList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceInfoNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the node.
   */
  node?: DescribeTraceInfoNodeResponseBodyNode;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62DXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: DescribeTraceInfoNodeResponseBodyNode,
      requestId: 'string',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

