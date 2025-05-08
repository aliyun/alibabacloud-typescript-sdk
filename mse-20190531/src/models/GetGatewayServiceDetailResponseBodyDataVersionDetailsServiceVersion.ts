// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels } from "./GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels";


export class GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion extends $dara.Model {
  /**
   * @remarks
   * The tag.
   */
  labels?: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels[];
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

