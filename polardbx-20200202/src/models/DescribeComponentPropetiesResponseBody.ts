// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentPropetiesResponseBodyProperties extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 4核32G
   */
  name?: string;
  /**
   * @remarks
   * The display order of the commodity module property.
   * 
   * The returned content varies depending on the commodity module.
   * 
   * @example
   * 1
   */
  orderIndex?: string;
  /**
   * @remarks
   * The commodity module.
   * 
   * @example
   * dn_node_spec
   */
  propertyCode?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * 172.27.35.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      orderIndex: 'OrderIndex',
      propertyCode: 'PropertyCode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      orderIndex: 'string',
      propertyCode: 'string',
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

export class DescribeComponentPropetiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The export parameters of the exception event.
   */
  properties?: DescribeComponentPropetiesResponseBodyProperties[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': DescribeComponentPropetiesResponseBodyProperties },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

