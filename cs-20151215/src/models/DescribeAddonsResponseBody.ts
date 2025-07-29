// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StandardComponentsValue } from "./StandardComponentsValue";


export class DescribeAddonsResponseBodyComponentGroupsItems extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * flexvolume
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAddonsResponseBodyComponentGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the component group.
   * 
   * @example
   * storage
   */
  groupName?: string;
  /**
   * @remarks
   * The names of the components in the component group.
   */
  items?: DescribeAddonsResponseBodyComponentGroupsItems[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'group_name',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      items: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroupsItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the returned components.
   */
  componentGroups?: DescribeAddonsResponseBodyComponentGroups[];
  /**
   * @remarks
   * Standard components.
   */
  standardComponents?: { [key: string]: StandardComponentsValue };
  static names(): { [key: string]: string } {
    return {
      componentGroups: 'ComponentGroups',
      standardComponents: 'StandardComponents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentGroups: { 'type': 'array', 'itemType': DescribeAddonsResponseBodyComponentGroups },
      standardComponents: { 'type': 'map', 'keyType': 'string', 'valueType': StandardComponentsValue },
    };
  }

  validate() {
    if(Array.isArray(this.componentGroups)) {
      $dara.Model.validateArray(this.componentGroups);
    }
    if(this.standardComponents) {
      $dara.Model.validateMap(this.standardComponents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

