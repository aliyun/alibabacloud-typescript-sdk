// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attribute } from "./Attribute";


export class ListComponentsResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * KNOX
   */
  applicationName?: string;
  /**
   * @remarks
   * The list of attributes.
   */
  attributes?: Attribute[];
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * KNOX
   */
  componentName?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * “”
   */
  namespace?: string;
  /**
   * @remarks
   * The total number of instances on which the component is installed.
   * 
   * @example
   * 1
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      attributes: 'Attributes',
      componentName: 'ComponentName',
      namespace: 'Namespace',
      replica: 'Replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      attributes: { 'type': 'array', 'itemType': Attribute },
      componentName: 'string',
      namespace: 'string',
      replica: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of component information.
   */
  components?: ListComponentsResponseBodyComponents[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FFAC608A-5DC3-174F-93C6-9F88CA6D5875
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponents },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

