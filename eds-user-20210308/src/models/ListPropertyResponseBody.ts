// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPropertyResponseBodyPropertiesPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * A
   */
  propertyValue?: string;
  /**
   * @remarks
   * The property value ID.
   * 
   * @example
   * 42
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBodyProperties extends $dara.Model {
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 30
   */
  propertyId?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property value information.
   */
  propertyValues?: ListPropertyResponseBodyPropertiesPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': ListPropertyResponseBodyPropertiesPropertyValues },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query. An empty NextToken indicates that no more results are available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The property information.
   */
  properties?: ListPropertyResponseBodyProperties[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      properties: { 'type': 'array', 'itemType': ListPropertyResponseBodyProperties },
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

