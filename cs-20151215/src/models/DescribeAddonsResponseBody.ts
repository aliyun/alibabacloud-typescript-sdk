// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAddonsResponseBodyComponentGroups } from "./DescribeAddonsResponseBodyComponentGroups";
import { StandardComponentsValue } from "./StandardComponentsValue";


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

